// Portfolio Data
const portfolioData = {
    name: "Sanchit Butola",
    title: "Data Scientist & Software Developer",
    bio: "Passionate data scientist and developer with expertise in machine learning, data analysis, and algorithm visualization. I create intelligent solutions using Python, JavaScript, and modern data science tools. Always eager to explore new technologies and solve complex computational problems.",
    email: "sanchit.2921@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "City, Country",
    profileImage: "",
    socialLinks: {
        github: "https://github.com/sanchitbutola",
        linkedin: "https://linkedin.com/in/sanchitbutola",
        twitter: "https://twitter.com/sanchitbutola",
        instagram: "https://instagram.com/sanchit butola"
    }
};

const sampleProjects = [
    {
        title: "Email Spam Classifier",
        description: "A machine learning project that classifies emails as spam or legitimate using natural language processing techniques and various classification algorithms.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        githubUrl: "https://github.com/sanchitbutola/email-spam-classifier",
        liveUrl: "https://email-spam-classifier.demo.com",
        technologies: ["Python", "Scikit-learn", "Natural Language Processing", "Pandas", "Machine Learning"],
        featured: true
    },
    {
        title: "Zomato Data Analysis",
        description: "Comprehensive data analysis of Zomato restaurant data using Python and data visualization tools to uncover insights about restaurant trends and customer preferences.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        githubUrl: "https://github.com/sanchitbutola/ZomatoDataAnalysis",
        liveUrl: "https://zomato-analysis.demo.com",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Jupyter"],
        featured: true
    },
    {
        title: "Sorting Visualizer",
        description: "An interactive web application that visualizes various sorting algorithms in real-time, helping users understand how different sorting techniques work.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        githubUrl: "https://github.com/sanchitbutola/sorting-visualizer",
        liveUrl: "https://sorting-visualizer.demo.com",
        technologies: ["JavaScript", "HTML5", "CSS3", "Algorithms", "Data Structures"],
        featured: true
    },
    {
        title: "RegExpression to NFA to DFA Converter",
        description: "A theoretical computer science project that converts regular expressions to Non-deterministic Finite Automata (NFA) and then to Deterministic Finite Automata (DFA).",
        image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        githubUrl: "https://github.com/sanchitbutola/regexp-nfa-dfa-converter",
        liveUrl: "https://automata-converter.demo.com",
        technologies: ["JavaScript", "Computer Science Theory", "Automata Theory", "Regular Expressions", "Algorithms"],
        featured: false
    }
];

const sampleSkills = [
    { name: "Python", category: "technical", percentage: 95, icon: "fab fa-python" },
    { name: "JavaScript", category: "technical", percentage: 90, icon: "fab fa-js-square" },
    { name: "Machine Learning", category: "technical", percentage: 88, icon: "fas fa-brain" },
    { name: "Data Analysis", category: "technical", percentage: 92, icon: "fas fa-chart-line" },
    { name: "Natural Language Processing", category: "technical", percentage: 85, icon: "fas fa-language" },
    { name: "Algorithms & Data Structures", category: "technical", percentage: 90, icon: "fas fa-project-diagram" },
    { name: "Pandas", category: "tools", percentage: 90, icon: "fas fa-table" },
    { name: "Scikit-learn", category: "tools", percentage: 85, icon: "fas fa-cogs" },
    { name: "Matplotlib/Seaborn", category: "tools", percentage: 88, icon: "fas fa-chart-bar" },
    { name: "Jupyter Notebook", category: "tools", percentage: 92, icon: "fas fa-code" },
    { name: "HTML5/CSS3", category: "tools", percentage: 88, icon: "fab fa-html5" },
    { name: "Git", category: "tools", percentage: 95, icon: "fab fa-git-alt" }
];

// DOM Elements
let activeSection = 'about';

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            activeSection = sectionId;
            
            // Update nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    sampleProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    ${project.githubUrl ? `<button class="btn btn-primary" onclick="window.open('${project.githubUrl}', '_blank')">
                        <i class="fab fa-github"></i>
                    </button>` : ''}
                    ${project.liveUrl ? `<button class="btn btn-outline" onclick="window.open('${project.liveUrl}', '_blank')">
                        <i class="fas fa-external-link-alt"></i>
                    </button>` : ''}
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl || '#'}" target="_blank" class="project-link">
                        View Project <i class="fas fa-arrow-right"></i>
                    </a>
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                    </a>` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load skills
function loadSkills() {
    const technicalSkills = sampleSkills.filter(skill => skill.category === 'technical');
    const toolSkills = sampleSkills.filter(skill => skill.category === 'tools');
    
    // Load technical skills
    const technicalSkillsContainer = document.getElementById('technical-skills');
    technicalSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">
                    <i class="${skill.icon} skill-icon"></i>
                    ${skill.name}
                </span>
                <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%" data-width="${skill.percentage}%"></div>
            </div>
        `;
        
        technicalSkillsContainer.appendChild(skillItem);
    });
    
    // Load tools
    const toolsGrid = document.getElementById('tools-grid');
    toolSkills.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        toolCard.innerHTML = `
            <i class="${tool.icon} tool-icon"></i>
            <p class="tool-name">${tool.name}</p>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
    
    // Animate skill bars when they come into view
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width;
                }
            });
        });
        
        document.querySelectorAll('.skill-item').forEach(item => {
            observer.observe(item);
        });
    }, 500);
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with your actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showToast('Message sent successfully!', 'success');
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            showToast('Error sending message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    
    if (type === 'success') {
        toastIcon.className = 'toast-icon fas fa-check-circle';
        toast.style.backgroundColor = 'var(--matrix-green)';
    } else {
        toastIcon.className = 'toast-icon fas fa-exclamation-circle';
        toast.style.backgroundColor = '#ef4444';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadProjects();
    loadSkills();
    initContactForm();
    initAnimations();
    
    // Update the active nav link on page load
    updateActiveNavLink();
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Smooth scrolling for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}