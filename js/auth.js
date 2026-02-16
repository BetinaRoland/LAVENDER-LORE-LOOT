// ===== AUTH UTILITIES =====

/**
 * Get the JWT token from localStorage
 */
function getAuthToken() {
    return localStorage.getItem('authToken');
}

/**
 * Get the user object from localStorage
 */
function getUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

/**
 * Check if user is authenticated
 */
function isAuthenticated() {
    return !!getAuthToken() && !!getUser();
}

/**
 * Check if user is admin
 */
function isAdmin() {
    const user = getUser();
    return user && user.role === 'admin';
}

/**
 * Save auth token and user to localStorage
 */
function saveAuth(token, user) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
}

/**
 * Clear auth from localStorage
 */
function clearAuth() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
}

/**
 * Make authenticated API request
 */
async function authenticatedFetch(url, options = {}) {
    const token = getAuthToken();
    
    if (!token) {
        throw new Error('Not authenticated');
    }
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
    };
    
    const response = await fetch(url, {
        ...options,
        headers
    });
    
    if (response.status === 401) {
        // Token invalid/expired
        clearAuth();
        window.location.href = '/login.html';
        throw new Error('Session expired. Please login again.');
    }
    
    return response;
}

/**
 * Login user
 */
async function login(email, password, rememberMe = false) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe })
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
    }
    
    const data = await response.json();
    saveAuth(data.token, data.user);
    return data;
}

/**
 * Sign up user
 */
async function signup(email, password, name) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Signup failed');
    }
    
    const data = await response.json();
    saveAuth(data.token, data.user);
    return data;
}

/**
 * Logout user
 */
function logout() {
    clearAuth();
    window.location.href = '/login.html';
}

/**
 * Get user profile
 */
async function getProfile() {
    const response = await authenticatedFetch('/api/auth/profile');
    
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    
    return await response.json();
}

/**
 * Track profile visit
 */
async function visitProfile(visitedEmail) {
    const response = await authenticatedFetch('/api/auth/visit-profile', {
        method: 'POST',
        body: JSON.stringify({ visitedEmail })
    });
    
    if (!response.ok) {
        throw new Error('Failed to track visit');
    }
    
    return await response.json();
}

/**
 * Request password reset
 */
async function requestPasswordReset(email) {
    const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Reset request failed');
    }
    
    return await response.json();
}

/**
 * Get all users (Admin only)
 */
async function getAllUsers() {
    const response = await authenticatedFetch('/api/admin/users');
    
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    
    return await response.json();
}

/**
 * Get all orders (Admin only)
 */
async function getAllOrders() {
    const response = await authenticatedFetch('/api/admin/orders');
    
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    
    return await response.json();
}

/**
 * Get profile visits (Admin only)
 */
async function getProfileVisits() {
    const response = await authenticatedFetch('/api/admin/profile-visits');
    
    if (!response.ok) {
        throw new Error('Failed to fetch visits');
    }
    
    return await response.json();
}

/**
 * Check JWT token validity
 */
function isTokenValid() {
    const token = getAuthToken();
    if (!token) return false;
    
    try {
        // Decode JWT (basic check - doesn't verify signature)
        const parts = token.split('.');
        if (parts.length !== 3) return false;
        
        const payload = JSON.parse(atob(parts[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        
        return payload.exp > currentTime;
    } catch (error) {
        return false;
    }
}

/**
 * Get token expiration time
 */
function getTokenExpiration() {
    const token = getAuthToken();
    if (!token) return null;
    
    try {
        const parts = token.split('.');
        const payload = JSON.parse(atob(parts[1]));
        return new Date(payload.exp * 1000);
    } catch (error) {
        return null;
    }
}

/**
 * Check if user should be redirected (e.g., on protected pages)
 */
function requireAuth(minRole = null) {
    if (!isAuthenticated()) {
        window.location.href = '/login.html';
        return false;
    }
    
    if (minRole === 'admin' && !isAdmin()) {
        window.location.href = '/';
        return false;
    }
    
    return true;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password strength
 */
function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    if (strength <= 1) return 'weak';
    if (strength === 2) return 'medium';
    return 'strong';
}

/**
 * Format currency
 */
function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
}

/**
 * Format date
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Format datetime
 */
function formatDateTime(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getAuthToken,
        getUser,
        isAuthenticated,
        isAdmin,
        saveAuth,
        clearAuth,
        authenticatedFetch,
        login,
        signup,
        logout,
        getProfile,
        visitProfile,
        requestPasswordReset,
        getAllUsers,
        getAllOrders,
        getProfileVisits,
        isTokenValid,
        getTokenExpiration,
        requireAuth,
        isValidEmail,
        getPasswordStrength,
        formatCurrency,
        formatDate,
        formatDateTime
    };
}
