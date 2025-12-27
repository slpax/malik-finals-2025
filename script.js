// --- Configuration & Data ---
const CONFIG = {
    targetDate: new Date('2025-12-21T09:00:00'),
    localStorageKey: 'finalsProgress_v2'
};

const ICONS = {
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    circle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5"/></svg>',
    network: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>'
};

// Updated Colors to support Dark Mode (added dark: classes)
const scheduleData = [
    
    {
        id: 'os',
        title: 'Operating Systems',
        date: 'Sunday, Dec 21',
        time: '09:00 AM - 11:00 AM',
        colors: { 
            bg: 'bg-purple-100 dark:bg-purple-900', 
            text: 'text-purple-800 dark:text-purple-200', 
            border: 'border-purple-200 dark:border-purple-800', 
            bar: 'bg-purple-100 dark:bg-purple-700' 
        },
        icon: ICONS.cpu,
        topics: [
            'Topic 1&2 - Intro & Business Process Management',
            'Topic 3 - Different Approaches to System Development',
            'Processes',
            'Threads',
            'CPU Scheduling Part 1',
            'CPU Scheduling Part 2',
            'Synchronization',
            'Deadlock',
            'Main Memory',
            'Virtual Memory',
            'File System'
        ]
    },

    {
        id: 'it-project',
        title: 'IT Project Management',
        date: 'Tuesday, Dec 23',
        time: '9:00 AM - 11:00 AM',
        colors: { 
            bg: 'bg-blue-100 dark:bg-blue-900', 
            text: 'text-blue-800 dark:text-blue-200', 
            border: 'border-blue-200 dark:border-blue-800', 
            bar: 'bg-blue-100 dark:bg-blue-700' 
        },
        icon: ICONS.book,
        topics: [
            'The Project Management Process Group',
            'Project Scope Management',
            'Project Time Management',
            'Project Cost Management',
            'Project Risk Management',
            'Project Human Resources Management',
            'Project Integration Management'
        ]
    },
    {
        id: 'sys-analysis',
        title: 'System Analysis',
        date: 'Thursday, Dec 25',
        time: '12:00 PM - 2:00 PM',
        colors: { 
            bg: 'bg-emerald-100 dark:bg-emerald-900', 
            text: 'text-emerald-800 dark:text-emerald-200', 
            border: 'border-emerald-200 dark:border-emerald-800', 
            bar: 'bg-emerald-100 dark:bg-emerald-700' 
        },
        icon: ICONS.server,
        topics: [
            'Topic1&2 – Intro & Business Process Management ',
            'Topic3 – Different Approaches to System Development',
            'Topic 4 - Analyzing the Business Case',
            'Topic 5 - Data Collection Methods',
            'Topic 6 - Factors Related to Requirements',
            'Topic 7 - Business Process Modeling Part 1',
            'Topic 7 - Business Process Modeling Part 2',
            'Topic 8 - Use Case Modeling',
            'Topic 9 - Sequence Diagram',
            'Topic 10 - Activity Diagram',
            'Topic 11 - Class and Object Diagram',
            'Topic 12 - Implementation Approaches'
        ]
    },
    {
        id: 'data-mgmt',
        title: 'Data & Info Management',
        date: 'Thursday, Jan 1',
        time: '12:00 PM - 2:00 PM',
        colors: { 
            bg: 'bg-orange-100 dark:bg-orange-900', 
            text: 'text-orange-800 dark:text-orange-200', 
            border: 'border-orange-200 dark:border-orange-800', 
            bar: 'bg-orange-100 dark:bg-orange-700' 
        },
        icon: ICONS.database,
        topics: [
            'Week 1 - Data Management',
            'Week 2 - Transaction processing',
            'Week 3 - Concurrency Control',
            'Week 4 - Database Back up & Recovery',
            'Week 2 - Data Management',
            'Week 2 - Data Management',
            'Week 6 - SQL Injection',
            'Week 7 - Need for NoSQL',
            'Week 8 - Key Value',
            'Week 9 - Document Stores',
            'Week 10 - Data Handling Ethics',
            'Week 11 - Data Governance',
            'Week 12 - Data Architecture',
            'Week 13 - Data Quality',
            'Week 14 - Data Management Maturity',
            'Week 15 - Big Data'
        ]
    },
    {
        id: 'infrastructure',
        title: 'IT Infrastructure',
        date: 'Sunday, Jan 4',
        time: 'Time TBD',
        colors: { 
            bg: 'bg-indigo-100 dark:bg-indigo-900', 
            text: 'text-indigo-800 dark:text-indigo-200', 
            border: 'border-indigo-200 dark:border-indigo-800', 
            bar: 'bg-indigo-100 dark:bg-indigo-700' 
        },
        icon: ICONS.network,
        topics: [
            'Week 6 & 7 - Ch 20: Unicast Routing Protocols',
            'Week 8 - Ch 1 & 2: Intro to Infrastructure',
            'Week 9 - Networking',
            'Week 10 - Ch 11: Core Computing',
            'Week 11 - Ch 06: System Performance Concepts',
            'Week 12 - Organizing Storage',
            'Week 13 - The Role of IT'
        ]
    }
];

// --- State Management ---
let progressState = JSON.parse(localStorage.getItem(CONFIG.localStorageKey)) || {};

// --- Functions ---

function saveState() {
    localStorage.setItem(CONFIG.localStorageKey, JSON.stringify(progressState));
}

function calculateProgress(examId, totalTopics) {
    let completed = 0;
    for (let i = 0; i < totalTopics; i++) {
        if (progressState[`${examId}-${i}`]) completed++;
    }
    return totalTopics === 0 ? 0 : Math.round((completed / totalTopics) * 100);
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    container.innerHTML = ''; // Clear existing

    scheduleData.forEach(exam => {
        const progress = calculateProgress(exam.id, exam.topics.length);
        const isDone = progress === 100;
        
        // Create Card Element with Dark Mode Classes
        const card = document.createElement('div');
        card.className = `flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border overflow-hidden transition-all hover:shadow-md ${exam.colors.border} ${isDone ? 'opacity-75' : ''}`;
        
        // Header HTML
        const headerHtml = `
            <div class="px-6 py-5 border-b ${exam.colors.border} ${exam.colors.bg} bg-opacity-30 dark:bg-opacity-20">
                <div class="flex justify-between items-start">
                    <div class="p-2 rounded-lg ${exam.colors.bg} bg-opacity-100 dark:bg-opacity-40 ${exam.colors.text}">
                        ${exam.icon}
                    </div>
                    <span class="text-xs font-bold uppercase tracking-wider bg-white dark:bg-gray-700 bg-opacity-60 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                        ${isDone ? 'COMPLETED' : `${progress}% Done`}
                    </span>
                </div>
                <h3 class="mt-4 text-xl font-bold text-gray-900 dark:text-white leading-tight">${exam.title}</h3>
                <div class="mt-3 flex flex-col gap-1 text-sm font-medium opacity-80 text-gray-700 dark:text-gray-300">
                    <div class="flex items-center gap-2">
                        ${ICONS.calendar}
                        ${exam.date}
                    </div>
                    <div class="flex items-center gap-2">
                        ${ICONS.clock}
                        ${exam.time}
                    </div>
                </div>
            </div>
        `;

        // Progress Bar HTML
        const progressBarHtml = `
            <div class="h-1 w-full bg-gray-100 dark:bg-gray-700">
                <div class="h-full transition-width ${exam.colors.bar}" style="width: ${progress}%"></div>
            </div>
        `;

        // Topics List HTML
        const topicsList = document.createElement('div');
        // Added 'custom-scrollbar' class here
        topicsList.className = 'flex-1 p-6 overflow-y-auto max-h-[400px] custom-scrollbar'; 
        topicsList.innerHTML = `<h4 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Topics to Study</h4>`;
        
        const ul = document.createElement('ul');
        ul.className = 'space-y-3';

        exam.topics.forEach((topic, idx) => {
            const isChecked = !!progressState[`${exam.id}-${idx}`];
            const li = document.createElement('li');
            li.className = `flex items-start gap-3 cursor-pointer group select-none transition-all ${isChecked ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-700 dark:text-gray-200'}`;
            li.onclick = () => {
                const key = `${exam.id}-${idx}`;
                progressState[key] = !progressState[key];
                saveState();
                renderSchedule(); // Re-render to update UI
            };

            li.innerHTML = `
                <div class="mt-0.5 flex-shrink-0 transition-colors ${isChecked ? 'text-green-500' : 'text-gray-300 dark:text-gray-600 group-hover:text-indigo-400'}">
                    ${isChecked ? ICONS.checkCircle : ICONS.circle}
                </div>
                <span class="text-sm leading-snug">${topic}</span>
            `;
            ul.appendChild(li);
        });

        topicsList.appendChild(ul);

        // Assemble Card
        card.innerHTML = headerHtml + progressBarHtml;
        card.appendChild(topicsList);
        
        container.appendChild(card);
    });
}

function updateTimer() {
    const timerEl = document.getElementById('timer');
    const now = new Date();
    const diff = CONFIG.targetDate - now;

    if (diff <= 0) {
        timerEl.textContent = 'Finals have started!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until Finals`;

}

// --- Dark Mode Logic ---
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check Local Storage or System Preference
    const userPref = localStorage.getItem('theme');
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPref === 'dark' || (!userPref && systemPref)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    // Toggle Click Event
    toggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            localStorage.setItem('theme', 'light');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderSchedule();
    updateTimer();
    initTheme(); // Initialize Dark Mode

    // Start Timer Interval
    setInterval(updateTimer, 60000);

    // Setup Reset Button
    document.getElementById('reset-btn').addEventListener('click', () => {
        if(confirm("Are you sure you want to reset all progress?")) {
            progressState = {};
            saveState();
            renderSchedule();
        }
    });
});





