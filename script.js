// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation dots functionality
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots[currentDot].classList.remove('active');
            dot.classList.add('active');
            currentDot = index;
        });
    });
    
    // Auto-rotate dots every 3 seconds
    setInterval(() => {
        dots[currentDot].classList.remove('active');
        currentDot = (currentDot + 1) % dots.length;
        dots[currentDot].classList.add('active');
    }, 3000);
    
    // Product icons hover effects
    const productIcons = document.querySelectorAll('.product-icon');
    
    productIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-15px) scale(1.15) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    // Gallery items parallax effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    function handleScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        galleryItems.forEach((item, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            item.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Throttled scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
        ticking = false;
    });
    
    // Hero parallax background
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroBackground.style.transform = `translateY(${rate}px)`;
    });
    
    // Gallery item click effects
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
        });
    });
    
    // Add subtle animation to hero content
    const heroContent = document.querySelector('.hero-content');
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
    
    // Initial setup for hero content
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 1s ease';
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });
    
    // Footer icons rotation effect
    const footerIcons = document.querySelectorAll('.footer-icon');
    
    footerIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-8px) rotate(15deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) rotate(0deg)';
        });
        
        // Staggered animation on load
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 100 * index);
        
        // Initial state
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        icon.style.transition = 'all 0.5s ease';
    });
    
    // Badge icon rotation
    const badgeIcon = document.querySelector('.badge-icon');
    
    setInterval(() => {
        badgeIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            badgeIcon.style.transform = 'rotate(0deg)';
        }, 1000);
    }, 5000);
    
    badgeIcon.style.transition = 'transform 1s ease';
    
    // Logo hover effect
    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text');
    
    logoIcon.addEventListener('mouseenter', () => {
        logoIcon.style.transform = 'scale(1.1) rotate(10deg)';
        logoText.style.color = '#f5f5dc';
    });
    
    logoIcon.addEventListener('mouseleave', () => {
        logoIcon.style.transform = 'scale(1) rotate(0deg)';
        logoText.style.color = '#d4af37';
    });
    
    logoIcon.style.transition = 'transform 0.3s ease';
    logoText.style.transition = 'color 0.3s ease';
});