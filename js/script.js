// Unsplash image sources - Using Unsplash for high-quality relevant images
const UNSPLASH_ACCESS_KEY = '9KgayEIIlYbfPhObBlKbN4LXraua4itv8UnngU6o7P0';
const UNSPLASH_BASE = 'https://images.unsplash.com';

// Image loading function using Unsplash
function loadUnsplashImage(query, elementId, width = 800, height = 600, alt = '') {
    const element = document.getElementById(elementId);
    if (element) {
        // Map specific element IDs to appropriate Unsplash photo IDs
        const imageMap = {
            'hero-img': 'photo-1565793298595-6a879b1d9492', // factory automation
            'case1-img': 'photo-1581091226825-a6a2a5aee158', // automotive manufacturing
            'case2-img': 'photo-1571019613454-1cb2f99b2d8b', // food quality control
            'case3-img': 'photo-1581092160562-40aa08e78837', // electronics manufacturing
            'iot-img': 'photo-1558618047-3c8c76ca7d13', // IoT sensors
            'ai-img': 'photo-1677442136019-21780ecad995', // AI technology
            'cloud-img': 'photo-1451187580459-43490279c0fa', // cloud computing
            'about-img': 'photo-1556761175-5973dc0f32e7', // office meeting
            'ceo-img': 'photo-1507003211169-0a1dd7228f2d', // business executive
            'cto-img': 'photo-1472099645785-5658abf4ff4e', // technology leader
            'coo-img': 'photo-1519085360753-af0119f7cbe7', // operations manager
            'featured-1': 'photo-1677442136019-21780ecad995', // AI technology
            'featured-2': 'photo-1565793298595-6a879b1d9492', // smart factory
            'article-new': 'photo-1581091226825-a6a2a5aee158', // digital transformation
            'article-1': 'photo-1558618047-3c8c76ca7d13', // edge computing
            'article-2': 'photo-1581091226825-a6a2a5aee158', // DX trends
            'article-3': 'photo-1581091226825-a6a2a5aee158', // automotive DX
            'article-4': 'photo-1551288049-bebda4e38f71', // data analytics
            'article-5': 'photo-1558618047-3c8c76ca7d13', // 5G technology
            'article-6': 'photo-1565793298595-6a879b1d9492', // sustainability
            'article-hero': 'photo-1565793298595-6a879b1d9492' // default hero
        };
        
        const photoId = imageMap[elementId] || 'photo-1565793298595-6a879b1d9492';
        element.src = `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=80`;
        element.alt = alt || `Image ${query}`;
        
        // Add error handling for failed image loads
        element.onerror = function() {
            this.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=80`;
        };
    }
}

// Initialize images based on current page
function initializeImages() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    switch (filename) {
        case 'index.html':
        case '':
            loadUnsplashImage('factory,automation,manufacturing', 'hero-img', 600, 400, '工場自動化');
            break;
            
        case 'services.html':
            loadUnsplashImage('iot,sensors,technology', 'iot-img', 400, 250, 'IoTセンサー');
            loadUnsplashImage('ai,artificial-intelligence,machine-learning', 'ai-img', 400, 250, 'AI・機械学習');
            loadUnsplashImage('cloud,computing,server', 'cloud-img', 400, 250, 'クラウド');
            break;
            
        case 'cases.html':
            loadUnsplashImage('automotive,manufacturing,assembly-line', 'case1-img', 400, 300, '自動車製造ライン');
            loadUnsplashImage('food,quality,control,inspection', 'case2-img', 400, 300, '食品品質管理');
            loadUnsplashImage('electronics,manufacturing,circuit-board', 'case3-img', 400, 300, '電子機器製造');
            break;
            
        case 'about.html':
            loadUnsplashImage('office,meeting,business,team', 'about-img', 500, 300, 'オフィス会議');
            loadUnsplashImage('business,executive,professional', 'ceo-img', 120, 120, 'CEO');
            loadUnsplashImage('technology,leader,professional', 'cto-img', 120, 120, 'CTO');
            loadUnsplashImage('operations,manager,professional', 'coo-img', 120, 120, 'COO');
            break;
            
        case 'tools.html':
            // Tools page doesn't need specific images as it uses SVG icons
            break;
            
        case 'knowledge.html':
            loadUnsplashImage('ai,artificial-intelligence,technology', 'featured-1', 600, 250, 'AI活用最新動向');
            loadUnsplashImage('smart,factory,automation,industry', 'featured-2', 600, 250, 'スマートファクトリー');
            loadUnsplashImage('digital,transformation,manufacturing', 'article-new', 400, 200, '2025年製造業DX最新トレンド');
            loadUnsplashImage('edge,computing,network,technology', 'article-1', 400, 200, 'エッジコンピューティング');
            loadUnsplashImage('digital,trends,technology,innovation', 'article-2', 400, 200, '2024年DXトレンド');
            loadUnsplashImage('automotive,parts,manufacturing', 'article-3', 400, 200, '自動車部品DX事例');
            loadUnsplashImage('data,analytics,dashboard,charts', 'article-4', 400, 200, 'データ活用ベストプラクティス');
            loadUnsplashImage('5g,network,technology,wireless', 'article-5', 400, 200, '5G技術製造業');
            loadUnsplashImage('sustainability,green,environment,manufacturing', 'article-6', 400, 200, 'サステナビリティDX');
            break;
            
        case 'resources.html':
            // Add resource images if needed
            break;
            
        case 'article-edge-computing.html':
            loadUnsplashImage('edge,computing,network,servers,data-center', 'article-hero', 800, 400, 'エッジコンピューティング技術');
            break;
            
        case 'article-dx-trends-2024.html':
            loadUnsplashImage('digital,transformation,technology,innovation', 'article-hero', 800, 400, '2024年DXトレンド');
            break;
            
        case 'article-automotive-dx-case.html':
            loadUnsplashImage('automotive,car,manufacturing,assembly', 'article-hero', 800, 400, '自動車部品DX事例');
            break;
            
        case 'article-data-best-practices.html':
            loadUnsplashImage('data,analytics,dashboard,visualization', 'article-hero', 800, 400, 'データ活用ベストプラクティス');
            break;
            
        case 'article-5g-manufacturing.html':
            loadUnsplashImage('5g,network,wireless,technology,antenna', 'article-hero', 800, 400, '5G製造業技術');
            break;
            
        case 'article-sustainability-dx.html':
            loadUnsplashImage('sustainability,green,environment,renewable-energy', 'article-hero', 800, 400, 'サステナビリティDX');
            break;
            
        case 'article-dx-trends-2025.html':
            loadUnsplashImage('digital,transformation,2025,future,technology', 'article-hero', 800, 400, '2025年製造業DX最新トレンド');
            break;
            
        case 'article-ai-manufacturing-trends.html':
            loadUnsplashImage('ai,artificial-intelligence,manufacturing,robotics', 'article-hero', 800, 400, 'AI製造業トレンド');
            break;
            
        case 'article-smart-factory-iot-strategy.html':
            loadUnsplashImage('smart,factory,iot,sensors,automation', 'article-hero', 800, 400, 'スマートファクトリーIoT戦略');
            break;
    }
}

// Mobile menu toggle
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                // Close all categories when menu is closed
                const categories = document.querySelectorAll('.nav-category');
                categories.forEach(category => {
                    category.classList.remove('mobile-active');
                });
            }
        });
        
        // Category toggle functionality for mobile only
        const categoryTitles = document.querySelectorAll('.category-title');
        categoryTitles.forEach(title => {
            title.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Only work on mobile (check if menu is in mobile mode)
                if (window.innerWidth <= 768) {
                    const category = title.closest('.nav-category');
                    
                    // Close other categories
                    const allCategories = document.querySelectorAll('.nav-category');
                    allCategories.forEach(cat => {
                        if (cat !== category) {
                            cat.classList.remove('mobile-active');
                        }
                    });
                    
                    // Toggle current category
                    category.classList.toggle('mobile-active');
                }
            });
        });
        
        // Close menu when clicking on a direct link (not category)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close if it's inside a category dropdown
                if (!link.closest('.category-items')) {
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                    // Close all categories
                    const categories = document.querySelectorAll('.nav-category');
                    categories.forEach(category => {
                        category.classList.remove('mobile-active');
                    });
                } else {
                    // For category items, close menu after a short delay
                    setTimeout(() => {
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                        document.body.style.position = '';
                        document.body.style.width = '';
                        const categories = document.querySelectorAll('.nav-category');
                        categories.forEach(category => {
                            category.classList.remove('mobile-active');
                        });
                    }, 100);
                }
            });
        });
    }
}

// FAQ toggle functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Check required fields
            const requiredFields = ['company', 'name', 'email', 'inquiry-type', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!data[field]) {
                    isValid = false;
                    const element = document.getElementById(field);
                    if (element) {
                        element.style.borderColor = '#e74c3c';
                    }
                }
            });
            
            if (!data.privacy) {
                isValid = false;
                alert('プライバシーポリシーに同意してください。');
            }
            
            if (isValid) {
                // Here you would normally send the data to your server
                alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');
                form.reset();
            } else {
                alert('必須項目を入力してください。');
            }
        });
        
        // Reset border color on input
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.style.borderColor = '#e0e0e0';
            });
        });
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.feature-card, .service-item, .case-item, .value-item, .team-member, .testimonial-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Tool navigation functionality
function initializeToolNavigation() {
    const toolLinks = document.querySelectorAll('.tool-link');
    const toolDemos = document.querySelectorAll('.tool-demo');
    
    toolLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const toolType = link.getAttribute('data-tool');
            
            // Here you would navigate to the specific tool's detailed page
            // For now, we'll show an alert with information
            const toolInfo = {
                'production': {
                    name: '生産管理システム',
                    url: '/tools/production-management',
                    description: '生産管理システムの詳細ページに移動します'
                },
                'iot': {
                    name: 'IoTセンサー管理',
                    url: '/tools/iot-sensors',
                    description: 'IoTセンサー管理システムの詳細ページに移動します'
                },
                'ai-quality': {
                    name: 'AI品質検査',
                    url: '/tools/ai-quality-control',
                    description: 'AI品質検査システムの詳細ページに移動します'
                },
                'inventory': {
                    name: '在庫最適化',
                    url: '/tools/inventory-optimization',
                    description: '在庫最適化システムの詳細ページに移動します'
                },
                'energy': {
                    name: 'エネルギー管理',
                    url: '/tools/energy-management',
                    description: 'エネルギー管理システムの詳細ページに移動します'
                },
                'quality': {
                    name: '品質管理システム',
                    url: '/tools/quality-management',
                    description: '品質管理システムの詳細ページに移動します'
                }
            };
            
            const tool = toolInfo[toolType];
            if (tool) {
                alert(`${tool.name}の詳細ページへ移動します。\n\n実際の実装では以下のURLに移動します：\n${tool.url}`);
                // In a real implementation, you would do:
                // window.location.href = tool.url;
            }
        });
    });
    
    toolDemos.forEach(demo => {
        demo.addEventListener('click', (e) => {
            e.preventDefault();
            const toolType = demo.getAttribute('data-tool');
            
            const demoInfo = {
                'production': {
                    name: '生産管理システム',
                    url: '/demo/production-management',
                    description: '生産管理システムのデモを開始します'
                },
                'iot': {
                    name: 'IoTセンサー管理',
                    url: '/demo/iot-sensors',
                    description: 'IoTセンサー管理システムのデモを開始します'
                },
                'ai-quality': {
                    name: 'AI品質検査',
                    url: '/demo/ai-quality-control',
                    description: 'AI品質検査システムのデモを開始します'
                },
                'inventory': {
                    name: '在庫最適化',
                    url: '/demo/inventory-optimization',
                    description: '在庫最適化システムのデモを開始します'
                },
                'energy': {
                    name: 'エネルギー管理',
                    url: '/demo/energy-management',
                    description: 'エネルギー管理システムのデモを開始します'
                },
                'quality': {
                    name: '品質管理システム',
                    url: '/demo/quality-management',
                    description: '品質管理システムのデモを開始します'
                }
            };
            
            const tool = demoInfo[toolType];
            if (tool) {
                alert(`${tool.name}のデモを開始します。\n\n実際の実装では以下のURLに移動します：\n${tool.url}`);
                // In a real implementation, you would do:
                // window.open(tool.url, '_blank');
            }
        });
    });
}

// Filter functionality for knowledge center and resources
function initializeFilters() {
    // Knowledge center filters
    const knowledgeFilters = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');
    
    knowledgeFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            
            // Update active state
            knowledgeFilters.forEach(btn => btn.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter articles
            articleCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 100);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Resource filters
    const resourceFilters = document.querySelectorAll('.tab-btn');
    const resourceItems = document.querySelectorAll('.resource-item');
    
    resourceFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            
            // Update active state
            resourceFilters.forEach(btn => btn.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter resources
            resourceItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Article filtering functionality for homepage
function initializeArticleFiltering() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const allSections = document.querySelectorAll('[data-category]');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter');
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter content
            allSections.forEach(section => {
                const categories = section.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    section.style.display = 'block';
                    section.classList.add('show');
                } else {
                    section.style.display = 'none';
                    section.classList.remove('show');
                }
            });
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeImages();
    initializeMobileMenu();
    initializeFAQ();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeToolNavigation();
    initializeFilters();
    initializeArticleFiltering();
});

// Handle window resize
window.addEventListener('resize', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        // Close all mobile categories
        const categories = document.querySelectorAll('.nav-category');
        categories.forEach(category => {
            category.classList.remove('mobile-active');
        });
    }
});