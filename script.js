// Enhanced Hotel Website Scripts
document.addEventListener('DOMContentLoaded', function() {
  
  // Enhanced Global Cursor with better performance
  const globalCursor = document.getElementById('globalCursor');
  if (globalCursor) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    let isMoving = false;
    
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      isMoving = true;
    });
    
    document.addEventListener('mouseleave', () => {
      isMoving = false;
      globalCursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
      isMoving = true;
      globalCursor.style.opacity = '1';
    });
    
    function follow() {
      if (isMoving) {
        cx += (mx - cx) * 0.15;
        cy += (my - cy) * 0.15;
        globalCursor.style.left = cx + 'px';
        globalCursor.style.top = cy + 'px';
        globalCursor.style.opacity = '1';
      }
      requestAnimationFrame(follow);
    }
    follow();
  }
  
  // Enhanced Navbar Scroll Effects
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide navbar when scrolling down, show when scrolling up
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Smooth Scrolling for internal links
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
  
  // Enhanced Button Interactions
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Loading Animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    setTimeout(() => {
      document.querySelectorAll('[data-animate]').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 150);
      });
    }, 300);
  });
  
  // Performance optimization
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduced-performance');
  }
});