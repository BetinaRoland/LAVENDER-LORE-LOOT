const PRODUCTS = {
    novels: [
        { id: 'nov1', name: 'The Midnight Library', description: 'A novel about infinite possibilities and second chances', price: 399, category: 'novels', type: 'educational', icon: '📖' },
        { id: 'nov2', name: 'Project Hail Mary', description: 'A thrilling space adventure by Andy Weir', price: 499, category: 'novels', type: 'educational', icon: '🚀' },
        { id: 'nov3', name: 'Atomic Habits', description: 'Proven way to build good habits and break bad ones', price: 350, category: 'novels', type: 'educational', icon: '⚡' },
        { id: 'nov4', name: 'The Psychology of Money', description: 'Timeless lessons on wealth and happiness', price: 299, category: 'novels', type: 'educational', icon: '💰' },
        { id: 'nov5', name: 'Ikigai', description: 'The Japanese secret to a long and happy life', price: 250, category: 'novels', type: 'educational', icon: '🌸' },
        { id: 'nov6', name: 'The Alchemist', description: 'A magical fable about following your dreams', price: 320, category: 'novels', type: 'educational', icon: '✨' },
        { id: 'nov7', name: '1984', description: 'Dystopian social science fiction classic', price: 280, category: 'novels', type: 'educational', icon: '👁️' },
        { id: 'nov8', name: 'To Kill a Mockingbird', description: 'American classic about justice and morality', price: 310, category: 'novels', type: 'educational', icon: '🦅' },
        { id: 'nov9', name: 'The Great Gatsby', description: 'Tale of wealth, love, and the American Dream', price: 270, category: 'novels', type: 'educational', icon: '🎩' },
        { id: 'nov10', name: 'Sapiens', description: 'A brief history of humankind', price: 450, category: 'novels', type: 'educational', icon: '🌍' },
        { id: 'nov11', name: 'Educated', description: 'Memoir about the power of education', price: 380, category: 'novels', type: 'educational', icon: '🎓' },
        { id: 'nov12', name: 'The Silent Patient', description: 'Psychological thriller that will shock you', price: 340, category: 'novels', type: 'educational', icon: '🤫' },
        { id: 'nov13', name: 'Where the Crawdads Sing', description: 'Mystery and coming-of-age story', price: 360, category: 'novels', type: 'educational', icon: '🦢' },
        { id: 'nov14', name: 'The Seven Husbands of Evelyn Hugo', description: 'Hollywood icon reveals her scandalous life', price: 330, category: 'novels', type: 'educational', icon: '🎬' },
        { id: 'nov15', name: 'Thinking, Fast and Slow', description: 'How we make decisions and judgments', price: 420, category: 'novels', type: 'educational', icon: '🧠' }
    ],
    
    courses: [
        { id: 'crs1', name: 'Complete C Programming Masterclass', description: 'From basics to advanced C programming with projects', price: 1999, category: 'courses', type: 'educational', icon: '💻' },
        { id: 'crs2', name: 'C++ Complete Course', description: 'Object-oriented programming with C++ and STL', price: 2199, category: 'courses', type: 'educational', icon: '⚙️' },
        { id: 'crs3', name: 'Python Programming Bootcamp', description: 'Learn Python from zero to advanced with AI/ML basics', price: 2499, category: 'courses', type: 'educational', icon: '🐍' },
        { id: 'crs4', name: 'Java Complete Developer Course', description: 'Core Java to Spring Boot and microservices', price: 2799, category: 'courses', type: 'educational', icon: '☕' },
        { id: 'crs5', name: 'Full Stack Web Development', description: 'HTML, CSS, JS, React, Node.js, MongoDB complete stack', price: 3499, category: 'courses', type: 'educational', icon: '🌐' },
        { id: 'crs6', name: 'Data Structures & Algorithms', description: 'Complete DSA course with 500+ coding problems', price: 2499, category: 'courses', type: 'educational', icon: '📊' },
        { id: 'crs7', name: 'JavaScript Mastery', description: 'Modern JavaScript ES6+ with projects', price: 1899, category: 'courses', type: 'educational', icon: '⚡' },
        { id: 'crs8', name: 'React.js Complete Guide', description: 'Build modern web apps with React and Redux', price: 2299, category: 'courses', type: 'educational', icon: '⚛️' },
        { id: 'crs9', name: 'Node.js Backend Development', description: 'REST APIs, authentication, databases', price: 2199, category: 'courses', type: 'educational', icon: '🟢' },
        { id: 'crs10', name: 'Machine Learning A-Z', description: 'ML algorithms, Python, scikit-learn, TensorFlow', price: 2999, category: 'courses', type: 'educational', icon: '🤖' },
        { id: 'crs11', name: 'Database Management Systems', description: 'SQL, MySQL, PostgreSQL, MongoDB complete course', price: 1799, category: 'courses', type: 'educational', icon: '🗄️' },
        { id: 'crs12', name: 'Git & GitHub Mastery', description: 'Version control and collaboration', price: 999, category: 'courses', type: 'educational', icon: '📂' },
        { id: 'crs13', name: 'Cloud Computing with AWS', description: 'EC2, S3, Lambda, RDS and more AWS services', price: 3199, category: 'courses', type: 'educational', icon: '☁️' },
        { id: 'crs14', name: 'DevOps Complete Course', description: 'Docker, Kubernetes, Jenkins, CI/CD pipelines', price: 2899, category: 'courses', type: 'educational', icon: '🔧' },
        { id: 'crs15', name: 'Cyber Security Fundamentals', description: 'Ethical hacking, network security, cryptography', price: 2699, category: 'courses', type: 'educational', icon: '🔒' },
        { id: 'crs16', name: 'Mobile App Development', description: 'Build Android and iOS apps with Flutter', price: 2599, category: 'courses', type: 'educational', icon: '📱' },
        { id: 'crs17', name: 'Artificial Intelligence Course', description: 'AI fundamentals, neural networks, deep learning', price: 3299, category: 'courses', type: 'educational', icon: '🧠' },
        { id: 'crs18', name: 'Blockchain Development', description: 'Smart contracts, Ethereum, Solidity programming', price: 2799, category: 'courses', type: 'educational', icon: '⛓️' },
        { id: 'crs19', name: 'UI/UX Design Complete', description: 'Figma, user research, prototyping, design systems', price: 2199, category: 'courses', type: 'educational', icon: '🎨' },
        { id: 'crs20', name: 'Linux System Administration', description: 'Ubuntu, shell scripting, server management', price: 1999, category: 'courses', type: 'educational', icon: '🐧' }
    ],
    
    notesSem1: [
        { id: 'n1s1', name: 'Engineering Mathematics I', description: 'Calculus, differential equations, matrices', price: 299, category: 'notes-cse-sem1', type: 'educational', icon: '📐', semester: 1 },
        { id: 'n1s2', name: 'Engineering Physics', description: 'Mechanics, waves, optics, quantum physics', price: 279, category: 'notes-cse-sem1', type: 'educational', icon: '🔬', semester: 1 },
        { id: 'n1s3', name: 'Engineering Chemistry', description: 'Atomic structure, bonding, polymers', price: 279, category: 'notes-cse-sem1', type: 'educational', icon: '⚗️', semester: 1 },
        { id: 'n1s4', name: 'Problem Solving & C Programming', description: 'Algorithm design, C language fundamentals', price: 329, category: 'notes-cse-sem1', type: 'educational', icon: '💻', semester: 1 },
        { id: 'n1s5', name: 'Engineering Graphics', description: 'Projections, isometric views, CAD basics', price: 249, category: 'notes-cse-sem1', type: 'educational', icon: '📏', semester: 1 },
        { id: 'n1s6', name: 'Communication Skills', description: 'Technical writing, presentation skills', price: 229, category: 'notes-cse-sem1', type: 'educational', icon: '✍️', semester: 1 }
    ],
    
    notesSem2: [
        { id: 'n2s1', name: 'Engineering Mathematics II', description: 'Vector calculus, Laplace transforms, complex analysis', price: 299, category: 'notes-cse-sem2', type: 'educational', icon: '📐', semester: 2 },
        { id: 'n2s2', name: 'Engineering Mechanics', description: 'Statics, dynamics, equilibrium, forces', price: 269, category: 'notes-cse-sem2', type: 'educational', icon: '⚡', semester: 2 },
        { id: 'n2s3', name: 'Basic Electrical & Electronics', description: 'Circuits, AC/DC analysis, semiconductor devices', price: 289, category: 'notes-cse-sem2', type: 'educational', icon: '🔌', semester: 2 },
        { id: 'n2s4', name: 'Programming in C++', description: 'OOP concepts, classes, inheritance, polymorphism', price: 329, category: 'notes-cse-sem2', type: 'educational', icon: '⚙️', semester: 2 },
        { id: 'n2s5', name: 'Data Structures Basics', description: 'Arrays, linked lists, stacks, queues', price: 349, category: 'notes-cse-sem2', type: 'educational', icon: '📊', semester: 2 },
        { id: 'n2s6', name: 'Environmental Studies', description: 'Ecology, pollution, sustainability', price: 199, category: 'notes-cse-sem2', type: 'educational', icon: '🌿', semester: 2 }
    ],
    
    notesSem3: [
        { id: 'n3s1', name: 'Data Structures & Algorithms', description: 'Trees, graphs, sorting, searching, complexity analysis', price: 399, category: 'notes-cse-sem3', type: 'educational', icon: '📊', semester: 3 },
        { id: 'n3s2', name: 'Digital Logic Design', description: 'Boolean algebra, combinational and sequential circuits', price: 329, category: 'notes-cse-sem3', type: 'educational', icon: '🔢', semester: 3 },
        { id: 'n3s3', name: 'Computer Organization', description: 'CPU architecture, memory hierarchy, instruction set', price: 349, category: 'notes-cse-sem3', type: 'educational', icon: '💾', semester: 3 },
        { id: 'n3s4', name: 'Discrete Mathematics', description: 'Set theory, logic, graph theory, combinatorics', price: 319, category: 'notes-cse-sem3', type: 'educational', icon: '🔣', semester: 3 },
        { id: 'n3s5', name: 'Object-Oriented Programming', description: 'Java programming, design patterns, UML', price: 359, category: 'notes-cse-sem3', type: 'educational', icon: '☕', semester: 3 },
        { id: 'n3s6', name: 'Unix & Shell Programming', description: 'Linux commands, shell scripts, system calls', price: 299, category: 'notes-cse-sem3', type: 'educational', icon: '🐧', semester: 3 }
    ],
    
    notesSem4: [
        { id: 'n4s1', name: 'Operating Systems', description: 'Process management, memory, file systems, deadlocks', price: 399, category: 'notes-cse-sem4', type: 'educational', icon: '🖥️', semester: 4 },
        { id: 'n4s2', name: 'Database Management Systems', description: 'SQL, normalization, transactions, indexing', price: 389, category: 'notes-cse-sem4', type: 'educational', icon: '🗄️', semester: 4 },
        { id: 'n4s3', name: 'Design & Analysis of Algorithms', description: 'Algorithm design techniques, complexity, optimization', price: 419, category: 'notes-cse-sem4', type: 'educational', icon: '⚡', semester: 4 },
        { id: 'n4s4', name: 'Computer Networks', description: 'OSI model, TCP/IP, routing, protocols', price: 379, category: 'notes-cse-sem4', type: 'educational', icon: '🌐', semester: 4 },
        { id: 'n4s5', name: 'Microprocessors & Microcontrollers', description: '8086, 8051 architecture, interfacing, assembly', price: 339, category: 'notes-cse-sem4', type: 'educational', icon: '🔬', semester: 4 },
        { id: 'n4s6', name: 'Software Engineering', description: 'SDLC, agile, testing, project management', price: 349, category: 'notes-cse-sem4', type: 'educational', icon: '🔧', semester: 4 }
    ],
    
    notesSem5: [
        { id: 'n5s1', name: 'Theory of Computation', description: 'Automata, formal languages, Turing machines', price: 369, category: 'notes-cse-sem5', type: 'educational', icon: '🤖', semester: 5 },
        { id: 'n5s2', name: 'Compiler Design', description: 'Lexical analysis, parsing, code generation', price: 379, category: 'notes-cse-sem5', type: 'educational', icon: '⚙️', semester: 5 },
        { id: 'n5s3', name: 'Web Technologies', description: 'HTML, CSS, JavaScript, PHP, MySQL', price: 359, category: 'notes-cse-sem5', type: 'educational', icon: '🌐', semester: 5 },
        { id: 'n5s4', name: 'Python Programming', description: 'Python basics, libraries, data science applications', price: 339, category: 'notes-cse-sem5', type: 'educational', icon: '🐍', semester: 5 },
        { id: 'n5s5', name: 'Computer Graphics', description: '2D/3D graphics, transformations, rendering', price: 329, category: 'notes-cse-sem5', type: 'educational', icon: '🎨', semester: 5 },
        { id: 'n5s6', name: 'Management & Entrepreneurship', description: 'Business basics, startup, leadership', price: 249, category: 'notes-cse-sem5', type: 'educational', icon: '💼', semester: 5 }
    ],
    
    notesSem6: [
        { id: 'n6s1', name: 'Machine Learning', description: 'Supervised, unsupervised, algorithms, neural networks', price: 449, category: 'notes-cse-sem6', type: 'educational', icon: '🤖', semester: 6 },
        { id: 'n6s2', name: 'Artificial Intelligence', description: 'Search, knowledge representation, expert systems', price: 429, category: 'notes-cse-sem6', type: 'educational', icon: '🧠', semester: 6 },
        { id: 'n6s3', name: 'Cloud Computing', description: 'AWS, Azure, virtualization, distributed systems', price: 399, category: 'notes-cse-sem6', type: 'educational', icon: '☁️', semester: 6 },
        { id: 'n6s4', name: 'Information Security', description: 'Cryptography, network security, ethical hacking', price: 389, category: 'notes-cse-sem6', type: 'educational', icon: '🔒', semester: 6 },
        { id: 'n6s5', name: 'Mobile Application Development', description: 'Android development, UI/UX, APIs', price: 379, category: 'notes-cse-sem6', type: 'educational', icon: '📱', semester: 6 },
        { id: 'n6s6', name: 'Project Management', description: 'Planning, execution, monitoring, agile practices', price: 269, category: 'notes-cse-sem6', type: 'educational', icon: '📋', semester: 6 }
    ],
    
    notesSem7: [
        { id: 'n7s1', name: 'Deep Learning', description: 'CNNs, RNNs, GANs, TensorFlow, PyTorch', price: 479, category: 'notes-cse-sem7', type: 'educational', icon: '🧠', semester: 7 },
        { id: 'n7s2', name: 'Big Data Analytics', description: 'Hadoop, Spark, data processing at scale', price: 449, category: 'notes-cse-sem7', type: 'educational', icon: '📊', semester: 7 },
        { id: 'n7s3', name: 'Internet of Things', description: 'IoT architecture, sensors, protocols, applications', price: 399, category: 'notes-cse-sem7', type: 'educational', icon: '📡', semester: 7 },
        { id: 'n7s4', name: 'Blockchain Technology', description: 'Distributed ledgers, smart contracts, Ethereum', price: 429, category: 'notes-cse-sem7', type: 'educational', icon: '⛓️', semester: 7 },
        { id: 'n7s5', name: 'Natural Language Processing', description: 'Text processing, sentiment analysis, chatbots', price: 459, category: 'notes-cse-sem7', type: 'educational', icon: '💬', semester: 7 },
        { id: 'n7s6', name: 'Cyber Security', description: 'Advanced security, penetration testing, forensics', price: 439, category: 'notes-cse-sem7', type: 'educational', icon: '🛡️', semester: 7 }
    ],
    
    notesSem8: [
        { id: 'n8s1', name: 'Distributed Systems', description: 'Distributed algorithms, consistency, fault tolerance', price: 399, category: 'notes-cse-sem8', type: 'educational', icon: '🌐', semester: 8 },
        { id: 'n8s2', name: 'Advanced Algorithms', description: 'Approximation, randomized, parallel algorithms', price: 449, category: 'notes-cse-sem8', type: 'educational', icon: '⚡', semester: 8 },
        { id: 'n8s3', name: 'DevOps & CI/CD', description: 'Docker, Kubernetes, Jenkins, automation', price: 399, category: 'notes-cse-sem8', type: 'educational', icon: '🔧', semester: 8 },
        { id: 'n8s4', name: 'Software Testing', description: 'Unit, integration, automation, quality assurance', price: 349, category: 'notes-cse-sem8', type: 'educational', icon: '✅', semester: 8 },
        { id: 'n8s5', name: 'Ethics in AI', description: 'Bias, fairness, responsible AI development', price: 299, category: 'notes-cse-sem8', type: 'educational', icon: '⚖️', semester: 8 },
        { id: 'n8s6', name: 'Project Work Guidelines', description: 'Final year project planning and execution', price: 199, category: 'notes-cse-sem8', type: 'educational', icon: '📝', semester: 8 }
    ],
    
    notesOther: [
        { id: 'nece1', name: 'ECE Semester 3 Complete Notes', description: 'Electronics fundamentals and circuits', price: 399, category: 'notes-ece', type: 'educational', icon: '🔌' },
        { id: 'nece2', name: 'ECE Signal Processing Notes', description: 'Digital and analog signal processing', price: 379, category: 'notes-ece', type: 'educational', icon: '📡' },
        { id: 'neee1', name: 'EEE Power Systems Notes', description: 'Generation, transmission, distribution', price: 389, category: 'notes-eee', type: 'educational', icon: '⚡' },
        { id: 'neee2', name: 'EEE Electrical Machines', description: 'DC, AC machines, transformers', price: 369, category: 'notes-eee', type: 'educational', icon: '🔋' },
        { id: 'nai1', name: 'AI & ML Fundamentals', description: 'Introduction to AI and machine learning', price: 449, category: 'notes-aids', type: 'educational', icon: '🤖' },
        { id: 'nai2', name: 'Data Science Complete Notes', description: 'Statistics, visualization, modeling', price: 429, category: 'notes-aids', type: 'educational', icon: '📊' },
        { id: 'nmech1', name: 'Mechanical Engineering Basics', description: 'Thermodynamics, fluid mechanics', price: 349, category: 'notes-mech', type: 'educational', icon: '⚙️' },
        { id: 'nmech2', name: 'Manufacturing Processes Notes', description: 'Casting, welding, machining', price: 329, category: 'notes-mech', type: 'educational', icon: '🔩' },
        { id: 'nciv1', name: 'Civil Engineering Fundamentals', description: 'Structures, surveying, materials', price: 339, category: 'notes-civil', type: 'educational', icon: '🏗️' },
        { id: 'nciv2', name: 'Construction Management', description: 'Planning, estimation, project management', price: 319, category: 'notes-civil', type: 'educational', icon: '🏢' },
        { id: 'ngate1', name: 'GATE CSE Complete Package', description: 'All subjects with previous years solutions', price: 899, category: 'notes-gate', type: 'educational', icon: '🎓' },
        { id: 'ngate2', name: 'GATE CSE Previous 10 Years', description: 'Solved papers with detailed explanations', price: 599, category: 'notes-gate', type: 'educational', icon: '📚' }
    ],
    
    placement: [
        { id: 'plc1', name: 'Complete DSA for Placements', description: '500+ problems with solutions and explanations', price: 999, category: 'placement-coding', type: 'educational', icon: '💻' },
        { id: 'plc2', name: 'LeetCode Top 150 Questions', description: 'Most asked interview questions with patterns', price: 799, category: 'placement-coding', type: 'educational', icon: '⚡' },
        { id: 'plc3', name: 'Competitive Programming Guide', description: 'Algorithms for competitive coding', price: 899, category: 'placement-coding', type: 'educational', icon: '🏆' },
        { id: 'plc4', name: 'Dynamic Programming Mastery', description: 'From basics to advanced DP problems', price: 599, category: 'placement-coding', type: 'educational', icon: '📊' },
        { id: 'plc5', name: 'DBMS Interview Questions', description: 'Top 200 DBMS questions for interviews', price: 449, category: 'placement-core-cs', type: 'educational', icon: '🗄️' },
        { id: 'plc6', name: 'Operating Systems for Placements', description: 'Core OS concepts with interview focus', price: 499, category: 'placement-core-cs', type: 'educational', icon: '🖥️' },
        { id: 'plc7', name: 'System Design Complete Guide', description: 'Design scalable systems step by step', price: 699, category: 'placement-core-cs', type: 'educational', icon: '🏗️' },
        { id: 'plc8', name: 'Low Level Design Guide', description: 'Object-oriented design patterns', price: 649, category: 'placement-core-cs', type: 'educational', icon: '⚙️' },
        { id: 'plc9', name: 'C++ for Competitive Programming', description: 'STL, templates, optimization techniques', price: 549, category: 'placement-languages', type: 'educational', icon: '⚙️' },
        { id: 'plc10', name: 'Java Interview Prep Complete', description: 'Core Java to advanced concepts', price: 499, category: 'placement-languages', type: 'educational', icon: '☕' },
        { id: 'plc11', name: 'Python for Tech Interviews', description: 'Python DSA and problem solving', price: 479, category: 'placement-languages', type: 'educational', icon: '🐍' },
        { id: 'plc12', name: 'Quantitative Aptitude Complete', description: '1000+ aptitude questions with shortcuts', price: 449, category: 'placement-aptitude', type: 'educational', icon: '🔢' },
        { id: 'plc13', name: 'Logical Reasoning Mastery', description: 'Puzzles, patterns, logical deductions', price: 399, category: 'placement-aptitude', type: 'educational', icon: '🧩' },
        { id: 'plc14', name: 'Verbal Ability & Reading', description: 'English comprehension and grammar', price: 379, category: 'placement-aptitude', type: 'educational', icon: '📖' },
        { id: 'plc15', name: 'Google Interview Preparation', description: 'Company-specific coding and system design', price: 899, category: 'placement-company', type: 'educational', icon: '🔍' },
        { id: 'plc16', name: 'Amazon Interview Package', description: 'Leadership principles and technical rounds', price: 849, category: 'placement-company', type: 'educational', icon: '📦' },
        { id: 'plc17', name: 'Microsoft Coding Interview', description: 'Microsoft-specific problems and approaches', price: 849, category: 'placement-company', type: 'educational', icon: '🪟' },
        { id: 'plc18', name: 'TCS NQT Preparation', description: 'Complete TCS digital preparation material', price: 599, category: 'placement-company', type: 'educational', icon: '💼' },
        { id: 'plc19', name: 'Resume Building for Tech', description: 'ATS-friendly resume templates and tips', price: 299, category: 'placement-soft-skills', type: 'educational', icon: '📄' },
        { id: 'plc20', name: 'HR Interview Mastery', description: 'Common HR questions and best answers', price: 349, category: 'placement-soft-skills', type: 'educational', icon: '👔' },
        { id: 'plc21', name: 'Behavioral Interview Guide', description: 'STAR method and behavioral questions', price: 399, category: 'placement-soft-skills', type: 'educational', icon: '🗣️' },
        { id: 'plc22', name: 'Complete Placement Package', description: 'All materials in one comprehensive bundle', price: 2999, category: 'placement-bundles', type: 'educational', icon: '🎁' },
        { id: 'plc23', name: '6-Month Preparation Roadmap', description: 'Structured plan from basics to advanced', price: 1499, category: 'placement-bundles', type: 'educational', icon: '📅' },
        { id: 'plc24', name: 'Final Year Crash Course', description: 'Quick revision for immediate placements', price: 1799, category: 'placement-bundles', type: 'educational', icon: '⚡' }
    ],
    
    stationery: [
        { id: 'sta1', name: 'Pilot G2 Gel Pen Pack', description: 'Smooth writing gel pens, pack of 5', price: 150, category: 'stationery', type: 'office', icon: '✒️', stock: 100 },
        { id: 'sta2', name: 'A4 Spiral Notebook 200 Pages', description: 'High quality ruled notebook', price: 120, category: 'stationery', type: 'office', icon: '📓', stock: 150 },
        { id: 'sta3', name: 'Stabilo Boss Highlighters', description: 'Set of 4 vibrant colors', price: 200, category: 'stationery', type: 'office', icon: '🖍️', stock: 80 },
        { id: 'sta4', name: 'Post-it Sticky Notes', description: 'Multi-color sticky note pads', price: 80, category: 'stationery', type: 'office', icon: '📝', stock: 120 },
        { id: 'sta5', name: 'Stapler with 1000 Pins', description: 'Heavy duty metal stapler', price: 150, category: 'stationery', type: 'office', icon: '📎', stock: 90 },
        { id: 'sta6', name: 'Correction Tape Set', description: 'Pack of 3 correction tapes', price: 90, category: 'stationery', type: 'office', icon: '⚪', stock: 100 },
        { id: 'sta7', name: 'Geometry Box Complete', description: 'Compass, protractor, rulers, pencils', price: 180, category: 'stationery', type: 'office', icon: '📐', stock: 70 },
        { id: 'sta8', name: 'Marker Pen Set 12 Colors', description: 'Permanent markers for boards', price: 220, category: 'stationery', type: 'office', icon: '🖊️', stock: 85 },
        { id: 'sta9', name: 'Clipboard A4 Size', description: 'Durable plastic clipboard', price: 60, category: 'stationery', type: 'office', icon: '📋', stock: 110 },
        { id: 'sta10', name: 'Eraser & Sharpener Combo', description: 'Premium quality erasers and sharpeners', price: 40, category: 'stationery', type: 'office', icon: '✏️', stock: 200 }
    ],
    
    techAccessories: [
        { id: 'tech1', name: 'SanDisk 32GB USB Drive', description: 'High-speed USB 3.0 pen drive', price: 450, category: 'tech-accessories', type: 'office', icon: '💾', stock: 60 },
        { id: 'tech2', name: 'Logitech Wireless Mouse', description: 'Ergonomic design, 1-year battery', price: 599, category: 'tech-accessories', type: 'office', icon: '🖱️', stock: 50 },
        { id: 'tech3', name: 'Boat Wired Earphones', description: 'Premium sound quality with mic', price: 399, category: 'tech-accessories', type: 'office', icon: '🎧', stock: 75 },
        { id: 'tech4', name: 'USB-C Hub 4-Port', description: 'Multi-port adapter for laptops', price: 850, category: 'tech-accessories', type: 'office', icon: '🔌', stock: 40 },
        { id: 'tech5', name: 'Laptop Sleeve 15.6 inch', description: 'Padded protection for laptops', price: 499, category: 'tech-accessories', type: 'office', icon: '💼', stock: 55 },
        { id: 'tech6', name: 'Wireless Keyboard Combo', description: 'Keyboard and mouse wireless set', price: 1299, category: 'tech-accessories', type: 'office', icon: '⌨️', stock: 35 },
        { id: 'tech7', name: 'Webcam HD 1080p', description: 'Full HD webcam with microphone', price: 1599, category: 'tech-accessories', type: 'office', icon: '📹', stock: 30 },
        { id: 'tech8', name: 'Phone Stand Adjustable', description: 'Universal smartphone holder', price: 249, category: 'tech-accessories', type: 'office', icon: '📱', stock: 80 },
        { id: 'tech9', name: 'Cable Organizer Kit', description: 'Manage cables neatly', price: 180, category: 'tech-accessories', type: 'office', icon: '🔗', stock: 90 },
        { id: 'tech10', name: 'External Hard Drive 1TB', description: 'Portable storage solution', price: 3499, category: 'tech-accessories', type: 'office', icon: '💿', stock: 25 }
    ],
    
    organization: [
        { id: 'org1', name: 'Plastic File Folders Set', description: 'Set of 10 transparent folders', price: 200, category: 'organization', type: 'office', icon: '📁', stock: 70 },
        { id: 'org2', name: 'Document Organizer Box', description: 'Large storage box with dividers', price: 350, category: 'organization', type: 'office', icon: '📦', stock: 45 },
        { id: 'org3', name: 'Ring Binder A4 Size', description: '4-ring binder for documents', price: 120, category: 'organization', type: 'office', icon: '📚', stock: 85 },
        { id: 'org4', name: '2026 Desk Planner', description: 'Monthly and weekly planner', price: 299, category: 'organization', type: 'office', icon: '📅', stock: 60 },
        { id: 'org5', name: 'Desktop Organizer', description: 'Multi-compartment desk organizer', price: 449, category: 'organization', type: 'office', icon: '🗂️', stock: 50 },
        { id: 'org6', name: 'Magazine Holder Set', description: 'Set of 3 magazine files', price: 280, category: 'organization', type: 'office', icon: '📰', stock: 55 },
        { id: 'org7', name: 'Label Maker Machine', description: 'Portable label printer', price: 1299, category: 'organization', type: 'office', icon: '🏷️', stock: 20 },
        { id: 'org8', name: 'Drawer Dividers Set', description: 'Adjustable drawer organizers', price: 380, category: 'organization', type: 'office', icon: '📏', stock: 40 },
        { id: 'org9', name: 'Wall Calendar 2026', description: 'Large wall-mounted calendar', price: 150, category: 'organization', type: 'office', icon: '🗓️', stock: 75 },
        { id: 'org10', name: 'Index Card Box', description: 'Storage box with index cards', price: 220, category: 'organization', type: 'office', icon: '🗃️', stock: 65 }
    ],
    
    artSupplies: [
        { id: 'art1', name: 'A3 Sketch Book 100 Pages', description: 'Premium quality drawing paper', price: 250, category: 'art-supplies', type: 'office', icon: '📔', stock: 50 },
        { id: 'art2', name: 'Camlin Oil Pastels 50 Colors', description: 'Vibrant oil pastel set', price: 350, category: 'art-supplies', type: 'office', icon: '🎨', stock: 40 },
        { id: 'art3', name: 'Faber-Castell Pencil Set', description: 'Professional sketching pencils', price: 450, category: 'art-supplies', type: 'office', icon: '✏️', stock: 45 },
        { id: 'art4', name: 'Canvas Board 12x16 inch', description: 'Pre-primed canvas for painting', price: 180, category: 'art-supplies', type: 'office', icon: '🖼️', stock: 35 },
        { id: 'art5', name: 'Acrylic Paint Set 12 Colors', description: 'High-quality acrylic paints', price: 599, category: 'art-supplies', type: 'office', icon: '🎨', stock: 30 },
        { id: 'art6', name: 'Paint Brush Set 15 Pieces', description: 'Various sizes for different techniques', price: 380, category: 'art-supplies', type: 'office', icon: '🖌️', stock: 55 },
        { id: 'art7', name: 'Watercolor Set 24 Shades', description: 'Premium watercolors with palette', price: 520, category: 'art-supplies', type: 'office', icon: '💧', stock: 40 },
        { id: 'art8', name: 'Calligraphy Pen Set', description: 'Fountain pens for calligraphy', price: 680, category: 'art-supplies', type: 'office', icon: '🖋️', stock: 25 },
        { id: 'art9', name: 'Coloring Book for Adults', description: 'Intricate designs for relaxation', price: 220, category: 'art-supplies', type: 'office', icon: '📖', stock: 60 },
        { id: 'art10', name: 'Artist Easel Portable', description: 'Foldable easel for painting', price: 1299, category: 'art-supplies', type: 'office', icon: '🎭', stock: 15 }
    ]
};

function getAllProducts() {
    return [
        ...PRODUCTS.novels,
        ...PRODUCTS.courses,
        ...PRODUCTS.notesSem1,
        ...PRODUCTS.notesSem2,
        ...PRODUCTS.notesSem3,
        ...PRODUCTS.notesSem4,
        ...PRODUCTS.notesSem5,
        ...PRODUCTS.notesSem6,
        ...PRODUCTS.notesSem7,
        ...PRODUCTS.notesSem8,
        ...PRODUCTS.notesOther,
        ...PRODUCTS.placement,
        ...PRODUCTS.stationery,
        ...PRODUCTS.techAccessories,
        ...PRODUCTS.organization,
        ...PRODUCTS.artSupplies
    ];
}

function getProductsByCategory(category) {
    const allProducts = getAllProducts();
    return allProducts.filter(p => p.category === category);
}

function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id);
}

function searchProducts(query) {
    const allProducts = getAllProducts();
    const lowerQuery = query.toLowerCase();
    return allProducts.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

function filterProducts(products, filters) {
    let filtered = [...products];
    
    if (filters.priceMin) {
        filtered = filtered.filter(p => p.price >= filters.priceMin);
    }
    
    if (filters.priceMax) {
        filtered = filtered.filter(p => p.price <= filters.priceMax);
    }
    
    if (filters.type) {
        filtered = filtered.filter(p => p.type === filters.type);
    }
    
    if (filters.semester) {
        filtered = filtered.filter(p => p.semester === parseInt(filters.semester));
    }
    
    return filtered;
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product-card hover-lift">
            <div class="product-image">
                <span style="font-size: 4rem;">${product.icon}</span>
                ${product.type ? `<span class="product-badge">${product.type}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${product.stock !== undefined ? `<p class="stock-info">Stock: ${product.stock}</p>` : ''}
                <p class="product-price">₹${product.price}</p>
                <button class="add-to-cart ripple" onclick="addProductToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addProductToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        addToCart(product);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCTS,
        getAllProducts,
        getProductsByCategory,
        getProductById,
        searchProducts,
        filterProducts,
        sortProducts,
        displayProducts
    };
}
