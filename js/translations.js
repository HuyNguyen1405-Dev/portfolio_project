// Translations data for multi-language support
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact"
        },

        // Home Section
        home: {
            greeting: "I'm",
            name: "Nguyen Van Huy",
            profession: "I'm a",
            professions: ["Full Stack Developer", "Web Developer", "Mobile App Developer", "UI/UX Designer"],
            description: "🚀 Passionate full-stack developer with <strong>2+ years</strong> of experience creating amazing digital experiences. I specialize in building scalable web applications using modern technologies like <strong>ASP.NET Core</strong>, <strong>React</strong>, and <strong>Flutter</strong>.",
            stats: {
                projects: "Projects Completed",
                experience: "Years Experience",
                satisfaction: "Client Satisfaction"
            },
            buttons: {
                hireMe: "Hire Me",
                viewWork: "View Work",
                downloadCV: "Download CV"
            },
            socialLabel: "Connect with me:",
            scrollText: "Scroll to explore"
        },

        // About Section
        about: {
            title: "About Me",
            subtitle: "I'm Huy and I'm a",
            profession: "Web Developer",
            description: "With a strong foundation in computer science and years of hands-on experience, I specialize in building robust web applications using cutting-edge technologies. My expertise spans from frontend development with modern frameworks to backend development with ASP.NET Core. I'm passionate about creating seamless user experiences and writing clean, maintainable code that scales.",
            personalInfo: {
                birthday: "Birthday:",
                age: "Age:",
                website: "Website:",
                email: "Email:",
                degree: "Degree:",
                phone: "Phone:",
                city: "City:",
                freelance: "Freelance:",
                values: {
                    birthday: "May 14, 2001",
                    age: "24",
                    website: "www.nguyenvanhuy.dev",
                    email: "huynv14.work@gmail.com",
                    degree: "Computer Science",
                    phone: "0392 67 67 58",
                    city: "Da Nang City",
                    freelance: "Available"
                }
            },
            buttons: {
                downloadCV: "Download CV",
                hireMe: "Hire Me"
            },
            education: {
                title: "Education",
                items: [
                    {
                        period: "2019 - 2023",
                        title: "Bachelor of Computer Science",
                        description: "Graduated with honors from University of Greenwich (VietNam) Da Nang Campus. Specialized in software engineering with focus on web development, database design, and modern programming paradigms."
                    },
                    {
                        period: "2023 - Present",
                        title: "Continuous Learning & Certifications",
                        description: "Actively pursuing advanced certifications in cloud computing (Azure), modern JavaScript frameworks, and mobile development. Committed to staying current with emerging technologies and best practices."
                    }
                ]
            },
            experience: {
                title: "Experience",
                items: [
                    {
                        period: "11/2023 - Present",
                        title: "Full Stack Developer At Thaco Auto",
                        description: "Development of enterprise web applications using ASP.NET Core and React. Responsible for architecture design, database optimization, and implementing modern CI/CD practices. Successfully delivered 3+ major projects."
                    },
                    {
                        period: "04/2023 - 05/2023",
                        title: "Fresher Front-End Developer At ST software company",
                        description: "Developed responsive web applications using modern frontend frameworks. Collaborated with design teams to implement pixel-perfect UI/UX designs. Gained experience in agile development methodologies and version control."
                    }
                ]
            }
        },

        // Services Section
        services: {
            title: "Services",
            items: [
                {
                    title: "Web Design",
                    description: "Creating beautiful, responsive, and user-friendly web designs that work perfectly across all devices and browsers."
                },
                {
                    title: "Web Development",
                    description: "Full-stack web development using modern technologies like ASP.NET Core, React, and SQL Server for robust applications."
                },
                {
                    title: "UI/UX Design",
                    description: "Designing intuitive user interfaces and seamless user experiences that engage users and drive conversions."
                },
                {
                    title: "Mobile App Development",
                    description: "Cross-platform mobile app development using Flutter to create native-like experiences for both iOS and Android."
                },
                {
                    title: "SEO Optimization",
                    description: "Optimizing websites for search engines to improve visibility, ranking, and organic traffic growth."
                },
                {
                    title: "API Development",
                    description: "Building robust RESTful APIs and microservices architecture for scalable and maintainable applications."
                }
            ]
        },

        // Portfolio Section
        portfolio: {
            title: "Portfolio",
            subtitle: "My Last Projects:",
            filters: {
                all: "All",
                webApp: "Web App",
                mobileApp: "Mobile App"
            },
            projects: [
                {
                    title: "Production Management Software At Thaco Auto",
                    description: "Smart production management system with modern interface",
                    demoText: "View Demo",
                    detailText: "View Details"
                },
                {
                    title: "ERP System At Thaco Auto",
                    description: "Comprehensive ERP system for enterprise management"
                },
                {
                    title: "Vehicle delivery software at Thaco Auto",
                    description: "Smart vehicle delivery management system with real-time tracking and route optimization"
                },
                {
                    title: "Vehicle inventory management software at Thaco Auto",
                    description: "Vehicle inventory management system with real-time tracking, data analytics and automated reporting"
                },
                {
                    title: "Production Management Application",
                    description: "Mobile production management app with real-time dashboard monitoring and smart reporting"
                }
            ]
        },

        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "Have You Any Questions?",
            serviceText: "I'M AT YOUR SERVICE",
            emailTitle: "SEND ME AN EMAIL",
            responseText: "I'M VERY RESPONSIVE TO MESSAGES",
            info: {
                phone: "Call Us On",
                office: "Office",
                email: "Email",
                website: "Website"
            },
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                note: "Or email me directly at:",
                success: {
                    title: "Message Sent Successfully!",
                    description: "Thank you for contacting me! Your message has been sent to",
                    response: "I'll get back to you as soon as possible, usually within 24 hours.",
                    close: "Close",
                    direct: "You can also reach me directly at:"
                }
            }
        },

        // Profile
        profile: {
            name: "Nguyen Van Huy",
            role: "Full Stack Developer"
        }
    },

    vi: {
        // Navigation
        nav: {
            home: "Trang chủ",
            about: "Về tôi",
            services: "Dịch vụ",
            portfolio: "Dự án",
            contact: "Liên hệ"
        },

        // Home Section
        home: {
            greeting: "Tôi là",
            name: "Nguyễn Văn Huy",
            profession: "Tôi là một",
            professions: ["Lập trình viên Full Stack", "Lập trình viên Web", "Lập trình viên ứng dụng di động", "Thiết kế UI/UX"],
            description: "🚀 Lập trình viên full-stack đam mê với hơn <strong>2 năm</strong> kinh nghiệm tạo ra những trải nghiệm số tuyệt vời. Tôi chuyên xây dựng ứng dụng web có thể mở rộng bằng các công nghệ hiện đại như <strong>ASP.NET Core</strong>, <strong>React</strong>, và <strong>Flutter</strong>.",
            stats: {
                projects: "Dự án hoàn thành",
                experience: "Năm kinh nghiệm",
                satisfaction: "Sự hài lòng khách hàng"
            },
            buttons: {
                hireMe: "Thuê tôi",
                viewWork: "Xem công việc",
                downloadCV: "Tải CV"
            },
            socialLabel: "Kết nối với tôi:",
            scrollText: "Cuộn để khám phá"
        },

        // About Section
        about: {
            title: "Về tôi",
            subtitle: "Tôi là Huy và tôi là một",
            profession: "Lập trình viên Web",
            description: "Với nền tảng vững chắc về khoa học máy tính và nhiều năm kinh nghiệm thực tiễn, tôi chuyên xây dựng các ứng dụng web mạnh mẽ bằng các công nghệ tiên tiến. Chuyên môn của tôi trải dài từ phát triển frontend với các framework hiện đại đến phát triển backend với ASP.NET Core. Tôi đam mê tạo ra trải nghiệm người dùng liền mạch và viết code sạch, dễ bảo trì có thể mở rộng.",
            personalInfo: {
                birthday: "Ngày sinh:",
                age: "Tuổi:",
                website: "Website:",
                email: "Email:",
                degree: "Bằng cấp:",
                phone: "Điện thoại:",
                city: "Thành phố:",
                freelance: "Freelance:",
                values: {
                    birthday: "14 tháng 5, 2001",
                    age: "24",
                    website: "www.nguyenvanhuy.dev",
                    email: "huynv14.work@gmail.com",
                    degree: "Khoa học máy tính",
                    phone: "0392 67 67 58",
                    city: "Thành phố Đà Nẵng",
                    freelance: "Có sẵn"
                }
            },
            buttons: {
                downloadCV: "Tải CV",
                hireMe: "Thuê tôi"
            },
            education: {
                title: "Học vấn",
                items: [
                    {
                        period: "2019 - 2023",
                        title: "Cử nhân Khoa học máy tính",
                        description: "Tốt nghiệp loại giỏi từ Đại học Greenwich (Việt Nam) - Cơ sở Đà Nẵng. Chuyên ngành kỹ thuật phần mềm với trọng tâm phát triển web, thiết kế cơ sở dữ liệu và các mô hình lập trình hiện đại."
                    },
                    {
                        period: "2023 - Hiện tại",
                        title: "Học tập liên tục & Chứng chỉ",
                        description: "Tích cực theo đuổi các chứng chỉ nâng cao về điện toán đám mây (Azure), các framework JavaScript hiện đại và phát triển di động. Cam kết cập nhật các công nghệ mới nổi và thực tiễn tốt nhất."
                    }
                ]
            },
            experience: {
                title: "Kinh nghiệm",
                items: [
                    {
                        period: "11/2023 - Hiện tại",
                        title: "Lập trình viên Full Stack tại Thaco Auto",
                        description: "Phát triển ứng dụng web doanh nghiệp sử dụng ASP.NET Core và React. Chịu trách nhiệm thiết kế kiến trúc, tối ưu hóa cơ sở dữ liệu và triển khai các thực tiễn CI/CD hiện đại. Đã giao hàng thành công hơn 3 dự án lớn."
                    },
                    {
                        period: "04/2023 - 05/2023",
                        title: "Lập trình viên Front-End mới tại công ty phần mềm ST",
                        description: "Phát triển ứng dụng web responsive sử dụng các framework frontend hiện đại. Hợp tác với các nhóm thiết kế để triển khai thiết kế UI/UX hoàn hảo từng pixel. Có kinh nghiệm về phương pháp phát triển agile và kiểm soát phiên bản."
                    }
                ]
            }
        },

        // Services Section  
        services: {
            title: "Dịch vụ",
            items: [
                {
                    title: "Thiết kế Web",
                    description: "Tạo ra các thiết kế web đẹp, responsive và thân thiện với người dùng hoạt động hoàn hảo trên mọi thiết bị và trình duyệt."
                },
                {
                    title: "Phát triển Web",
                    description: "Phát triển web full-stack sử dụng các công nghệ hiện đại như ASP.NET Core, React và SQL Server cho các ứng dụng mạnh mẽ."
                },
                {
                    title: "Thiết kế UI/UX",
                    description: "Thiết kế giao diện người dùng trực quan và trải nghiệm người dùng liền mạch thu hút người dùng và thúc đẩy chuyển đổi."
                },
                {
                    title: "Phát triển ứng dụng di động",
                    description: "Phát triển ứng dụng di động đa nền tảng sử dụng Flutter để tạo trải nghiệm giống native cho cả iOS và Android."
                },
                {
                    title: "Tối ưu hóa SEO",
                    description: "Tối ưu hóa trang web cho các công cụ tìm kiếm để cải thiện khả năng hiển thị, xếp hạng và tăng trưởng lưu lượng tự nhiên."
                },
                {
                    title: "Phát triển API",
                    description: "Xây dựng API RESTful mạnh mẽ và kiến trúc microservices cho các ứng dụng có thể mở rộng và dễ bảo trì."
                }
            ]
        },

        // Portfolio Section
        portfolio: {
            title: "Dự án",
            subtitle: "Các dự án gần đây của tôi:",
            filters: {
                all: "Tất cả",
                webApp: "Ứng dụng Web",
                mobileApp: "Ứng dụng di động"
            },
            projects: [
                {
                    title: "Phần mềm quản lý sản xuất tại Thaco Auto",
                    description: "Hệ thống quản lý sản xuất thông minh với giao diện hiện đại",
                    demoText: "Xem Demo",
                    detailText: "Xem Chi tiết"
                },
                {
                    title: "Hệ thống ERP tại Thaco Auto",
                    description: "Hệ thống ERP tích hợp toàn diện cho quản lý doanh nghiệp"
                },
                {
                    title: "Phần mềm giao hàng xe tại Thaco Auto",
                    description: "Hệ thống quản lý giao hàng xe thông minh với theo dõi thời gian thực và tối ưu hóa tuyến đường"
                },
                {
                    title: "Phần mềm quản lý tồn kho xe tại Thaco Auto",
                    description: "Hệ thống quản lý tồn kho xe với theo dõi real-time, phân tích dữ liệu và báo cáo tự động"
                },
                {
                    title: "Ứng dụng quản lý sản xuất",
                    description: "Ứng dụng di động quản lý sản xuất với dashboard theo dõi realtime và báo cáo thông minh"
                }
            ]
        },

        // Contact Section
        contact: {
            title: "Liên hệ",
            subtitle: "Bạn có câu hỏi nào không?",
            serviceText: "TÔI SẴN SÀNG PHỤC VỤ BẠN",
            emailTitle: "GỬI EMAIL CHO TÔI",
            responseText: "TÔI PHẢN HỒI TIN NHẮN RẤT NHANH",
            info: {
                phone: "Gọi cho chúng tôi",
                office: "Văn phòng",
                email: "Email",
                website: "Website"
            },
            form: {
                name: "Tên",
                email: "Email",
                subject: "Chủ đề",
                message: "Tin nhắn",
                send: "Gửi tin nhắn",
                note: "Hoặc gửi email trực tiếp cho tôi:",
                success: {
                    title: "Gửi tin nhắn thành công!",
                    description: "Cảm ơn bạn đã liên hệ với tôi! Tin nhắn của bạn đã được gửi đến",
                    response: "Tôi sẽ phản hồi bạn sớm nhất có thể, thường trong vòng 24 giờ.",
                    close: "Đóng",
                    direct: "Bạn cũng có thể liên hệ trực tiếp với tôi tại:"
                }
            }
        },

        // Profile
        profile: {
            name: "Nguyễn Văn Huy",
            role: "Lập trình viên Full Stack"
        }
    }
};

// Language switching functionality
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.createLanguageToggle();
        this.setLanguage(this.currentLanguage);
        this.setupEventListeners();
    }

    createLanguageToggle() {
        // Check if language toggle already exists
        if (document.querySelector('.language-toggle')) {
            console.log('Language toggle already exists');
            return;
        }

        const languageToggle = document.createElement('div');
        languageToggle.className = 'language-toggle';
        languageToggle.innerHTML = `
            <div class="language-switcher">
                <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                    <span class="flag">🇺🇸</span>
                    <span class="lang-text">EN</span>
                </button>
                <button class="lang-btn ${this.currentLanguage === 'vi' ? 'active' : ''}" data-lang="vi">
                    <span class="flag">🇻🇳</span>
                    <span class="lang-text">VI</span>
                </button>
            </div>
        `;

        // Try to add to sidebar footer first
        const sidebarFooter = document.querySelector('.sidebar-footer');
        if (sidebarFooter) {
            sidebarFooter.insertBefore(languageToggle, sidebarFooter.firstChild);
            console.log('Language toggle added to sidebar footer');
        } else {
            // Fallback: add to body as fixed element
            languageToggle.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                background: var(--bg-black-100);
                border: 1px solid var(--bg-black-50);
                border-radius: 25px;
                padding: 8px;
                box-shadow: 0 5px 15px var(--shadow-color);
            `;
            document.body.appendChild(languageToggle);
            console.log('Language toggle added to body as fallback');
        }
    }

    setupEventListeners() {
        // Use event delegation for better performance and reliability
        document.addEventListener('click', (e) => {
            const langBtn = e.target.closest('.lang-btn');
            if (langBtn) {
                e.preventDefault();
                e.stopPropagation();

                const newLang = langBtn.dataset.lang;
                console.log('Language button clicked:', newLang);

                if (newLang && newLang !== this.currentLanguage) {
                    this.setLanguage(newLang);
                }
            }
        });

        console.log('Language event listeners set up');
    }

    setLanguage(lang) {
        console.log('Setting language to:', lang);
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update document language
        document.documentElement.lang = lang;

        // Update content
        this.updateContent();

        // Update typing animation if it exists
        if (window.typingAnimation) {
            window.typingAnimation.destroy();
            setTimeout(() => {
                this.initTypingAnimation();
            }, 100);
        }

        console.log('Language switched to:', lang);
    }

    updateContent() {
        const t = translations[this.currentLanguage];

        // Update navigation
        this.updateNavigation(t.nav);

        // Update home section
        this.updateHomeSection(t.home);

        // Update about section
        this.updateAboutSection(t.about);

        // Update services section
        this.updateServicesSection(t.services);

        // Update portfolio section
        this.updatePortfolioSection(t.portfolio);

        // Update contact section
        this.updateContactSection(t.contact);

        // Update profile info
        this.updateProfileInfo(t.profile);
    }

    updateNavigation(nav) {
        // Update main navigation
        const navItems = document.querySelectorAll('.nav a span');
        if (navItems.length >= 5) {
            navItems[0].textContent = nav.home;
            navItems[1].textContent = nav.about;
            navItems[2].textContent = nav.services;
            navItems[3].textContent = nav.portfolio;
            navItems[4].textContent = nav.contact;
        }

        // Update tooltips
        const tooltips = document.querySelectorAll('.nav-tooltip');
        if (tooltips.length >= 5) {
            tooltips[0].textContent = this.currentLanguage === 'vi' ? 'Trang chủ' : 'Home';
            tooltips[1].textContent = this.currentLanguage === 'vi' ? 'Về tôi' : 'About';
            tooltips[2].textContent = this.currentLanguage === 'vi' ? 'Dịch vụ' : 'Services';
            tooltips[3].textContent = this.currentLanguage === 'vi' ? 'Dự án' : 'Portfolio';
            tooltips[4].textContent = this.currentLanguage === 'vi' ? 'Liên hệ' : 'Contact';
        }
    }

    updateHomeSection(home) {
        // Update name and profession
        const nameTitle = document.querySelector('.name-title');
        if (nameTitle) {
            nameTitle.innerHTML = `${home.greeting} <span class="highlight">${home.name}</span>`;
        }

        const professionLabel = document.querySelector('.profession-label');
        if (professionLabel) {
            professionLabel.textContent = home.profession + ' ';
        }

        // Update description
        const description = document.querySelector('.home-info .description');
        if (description) {
            description.innerHTML = home.description;
        }

        // Update stats
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = home.stats.projects;
            statLabels[1].textContent = home.stats.experience;
            statLabels[2].textContent = home.stats.satisfaction;
        }

        // Update buttons
        const hireMeBtn = document.querySelector('.hire-me');
        if (hireMeBtn) {
            hireMeBtn.innerHTML = `<i class="fas fa-envelope"></i> ${home.buttons.hireMe}`;
        }

        const viewWorkBtn = document.querySelector('.btn-secondary');
        if (viewWorkBtn) {
            viewWorkBtn.innerHTML = `<i class="fas fa-eye"></i> ${home.buttons.viewWork}`;
        }

        const downloadCVBtn = document.querySelector('.btn-outline');
        if (downloadCVBtn) {
            downloadCVBtn.innerHTML = `<i class="fas fa-download"></i> ${home.buttons.downloadCV}`;
        }

        // Update social label
        const socialLabel = document.querySelector('.social-label');
        if (socialLabel) {
            socialLabel.textContent = home.socialLabel;
        }

        // Update scroll indicator
        const scrollText = document.querySelector('.scroll-indicator span');
        if (scrollText) {
            scrollText.textContent = home.scrollText;
        }
    }

    updateAboutSection(about) {
        // Update section title
        const aboutTitle = document.querySelector('#about .section-title h2');
        if (aboutTitle) {
            aboutTitle.textContent = about.title;
        }

        // Update subtitle
        const aboutSubtitle = document.querySelector('.about-text h3');
        if (aboutSubtitle) {
            aboutSubtitle.innerHTML = `${about.subtitle} <span>${about.profession}</span>`;
        }

        // Update description
        const aboutDescription = document.querySelector('.about-text p');
        if (aboutDescription) {
            aboutDescription.textContent = about.description;
        }

        // Update personal info
        const infoItems = document.querySelectorAll('.info-item p');
        if (infoItems.length >= 8) {
            infoItems[0].innerHTML = `${about.personalInfo.birthday} <span>${about.personalInfo.values.birthday}</span>`;
            infoItems[1].innerHTML = `${about.personalInfo.age} <span>${about.personalInfo.values.age}</span>`;
            infoItems[2].innerHTML = `${about.personalInfo.website} <span>${about.personalInfo.values.website}</span>`;
            infoItems[3].innerHTML = `${about.personalInfo.email} <span>${about.personalInfo.values.email}</span>`;
            infoItems[4].innerHTML = `${about.personalInfo.degree} <span>${about.personalInfo.values.degree}</span>`;
            infoItems[5].innerHTML = `${about.personalInfo.phone} <span>${about.personalInfo.values.phone}</span>`;
            infoItems[6].innerHTML = `${about.personalInfo.city} <span>${about.personalInfo.values.city}</span>`;
            infoItems[7].innerHTML = `${about.personalInfo.freelance} <span>${about.personalInfo.values.freelance}</span>`;
        }

        // Update buttons
        const aboutBtns = document.querySelectorAll('.about-content .btn');
        if (aboutBtns.length >= 2) {
            aboutBtns[0].textContent = about.buttons.downloadCV;
            aboutBtns[1].textContent = about.buttons.hireMe;
        }

        // Update education
        const educationTitle = document.querySelector('.education .title');
        if (educationTitle) {
            educationTitle.textContent = about.education.title;
        }

        const educationItems = document.querySelectorAll('.education .timeline-item');
        educationItems.forEach((item, index) => {
            if (about.education.items[index]) {
                const title = item.querySelector('.timeline-title');
                const text = item.querySelector('.timeline-text');
                if (title) title.textContent = about.education.items[index].title;
                if (text) text.textContent = about.education.items[index].description;
            }
        });

        // Update experience
        const experienceTitle = document.querySelector('.experience .title');
        if (experienceTitle) {
            experienceTitle.textContent = about.experience.title;
        }

        const experienceItems = document.querySelectorAll('.experience .timeline-item');
        experienceItems.forEach((item, index) => {
            if (about.experience.items[index]) {
                const title = item.querySelector('.timeline-title');
                const text = item.querySelector('.timeline-text');
                if (title) title.textContent = about.experience.items[index].title;
                if (text) text.textContent = about.experience.items[index].description;
            }
        });
    }

    updateServicesSection(services) {
        // Update section title
        const servicesTitle = document.querySelector('#services .section-title h2');
        if (servicesTitle) {
            servicesTitle.textContent = services.title;
        }

        // Update service items
        const serviceItems = document.querySelectorAll('.service-item-inner');
        serviceItems.forEach((item, index) => {
            if (services.items[index]) {
                const title = item.querySelector('h4');
                const description = item.querySelector('p');
                if (title) title.textContent = services.items[index].title;
                if (description) description.textContent = services.items[index].description;
            }
        });
    }

    updatePortfolioSection(portfolio) {
        // Update section title
        const portfolioTitle = document.querySelector('#portfolio .section-title h2');
        if (portfolioTitle) {
            portfolioTitle.textContent = portfolio.title;
        }

        // Update subtitle
        const portfolioSubtitle = document.querySelector('.portfolio-heading h2');
        if (portfolioSubtitle) {
            portfolioSubtitle.textContent = portfolio.subtitle;
        }

        // Update filter buttons
        const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
        if (filterBtns.length >= 3) {
            filterBtns[0].textContent = portfolio.filters.all;
            filterBtns[1].textContent = portfolio.filters.webApp;
            filterBtns[2].textContent = portfolio.filters.mobileApp;
        }

        // Update portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-info');
        portfolioItems.forEach((item, index) => {
            if (portfolio.projects[index]) {
                const title = item.querySelector('h4');
                const description = item.querySelector('p');
                if (title) title.textContent = portfolio.projects[index].title;
                if (description) description.textContent = portfolio.projects[index].description;
            }
        });

        // Update demo links
        const demoLinks = document.querySelectorAll('.portfolio-action[title*="Demo"], .portfolio-action[title*="Xem Demo"]');
        demoLinks.forEach(link => {
            link.title = portfolio.projects[0]?.demoText || (this.currentLanguage === 'vi' ? 'Xem Demo' : 'View Demo');
        });
    }

    updateContactSection(contact) {
        // Update section title
        const contactTitle = document.querySelector('#contact .section-title h2');
        if (contactTitle) {
            contactTitle.textContent = contact.title;
        }

        // Update subtitles
        const contactSubtitles = document.querySelectorAll('.contact-title');
        if (contactSubtitles.length >= 2) {
            contactSubtitles[0].textContent = contact.subtitle;
            contactSubtitles[1].textContent = contact.emailTitle;
        }

        const contactSubTexts = document.querySelectorAll('.contact-sub-title');
        if (contactSubTexts.length >= 2) {
            contactSubTexts[0].textContent = contact.serviceText;
            contactSubTexts[1].textContent = contact.responseText;
        }

        // Update contact info
        const contactInfoItems = document.querySelectorAll('.contact-info-item h4');
        if (contactInfoItems.length >= 4) {
            contactInfoItems[0].textContent = contact.info.phone;
            contactInfoItems[1].textContent = contact.info.office;
            contactInfoItems[2].textContent = contact.info.email;
            contactInfoItems[3].textContent = contact.info.website;
        }

        // Update form placeholders
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        formInputs.forEach(input => {
            const name = input.getAttribute('name');
            if (contact.form[name]) {
                input.placeholder = contact.form[name];
            }
        });

        // Update form button
        const formBtn = document.querySelector('.contact-form .btn');
        if (formBtn) {
            formBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${contact.form.send}`;
        }

        // Update form note
        const formNote = document.querySelector('.form-note');
        if (formNote) {
            formNote.innerHTML = `${contact.form.note} <a href="mailto:huynv14.work@gmail.com?subject=Portfolio Contact&body=Hello Huy,%0D%0A%0D%0A" class="email-link">huynv14.work@gmail.com</a>`;
        }
    }

    updateProfileInfo(profile) {
        // Update profile name
        const profileName = document.querySelector('.profile-name');
        if (profileName) {
            profileName.textContent = profile.name;
        }

        // Update profile role
        const profileRole = document.querySelector('.profile-role');
        if (profileRole) {
            profileRole.textContent = profile.role;
        }
    }

    initTypingAnimation() {
        const t = translations[this.currentLanguage];
        if (typeof Typed !== 'undefined') {
            window.typingAnimation = new Typed('.typing', {
                strings: t.home.professions,
                typeSpeed: 50,
                backSpeed: 50,
                loop: true
            });
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Language Manager...');

    // Small delay to ensure all DOM elements are loaded
    setTimeout(() => {
        try {
            window.languageManager = new LanguageManager();
            console.log('Language Manager initialized successfully');
        } catch (error) {
            console.error('Error initializing Language Manager:', error);
        }
    }, 100);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager };
}
