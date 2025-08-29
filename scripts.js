// Page Navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.textContent.toLowerCase() === pageId) {
                    link.classList.add('active');
                }
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // Mobile Navigation Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            this.reset();
            alert('Thanks for subscribing to our newsletter!');
        });
        
        // FAQ toggle functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
        
        // Animate stats counter
        function animateStats() {
            const stat1 = document.getElementById('stat1');
            const stat2 = document.getElementById('stat2');
            const stat3 = document.getElementById('stat3');
            const stat4 = document.getElementById('stat4');
            
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let count4 = 0;
            
            const target1 = 2500;
            const target2 = 1200;
            const target3 = 40;
            const target4 = 98;
            
            const interval = setInterval(() => {
                if (count1 < target1) count1 += 25;
                if (count2 < target2) count2 += 12;
                if (count3 < target3) count3 += 1;
                if (count4 < target4) count4 += 1;
                
                stat1.textContent = count1.toLocaleString();
                stat2.textContent = count2.toLocaleString();
                stat3.textContent = count3;
                stat4.textContent = count4 + '%';
                
                if (count1 >= target1 && count2 >= target2 && count3 >= target3 && count4 >= target4) {
                    clearInterval(interval);
                }
            }, 20);
        }
        
        // Initialize stats animation when stats section is in viewport
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
        
        // Add subtle animations to elements when they come into view
        const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .service-card, .team-member, .value-card, .pricing-card');
        
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    elementObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            elementObserver.observe(element);
        });