// Page-wide appearance animations without moving text
document.addEventListener('DOMContentLoaded', function onReady() {
  // Global fade-in with subtle blur. No translate/scale anywhere.
  document.body.style.opacity = '0';
  document.body.style.filter = 'blur(8px)';
  document.body.style.transition = 'opacity 800ms ease-out, filter 800ms ease-out';

  // Defer to next frame to ensure transitions apply
  requestAnimationFrame(function () {
    document.body.style.opacity = '1';
    document.body.style.filter = 'blur(0)';
  });

  // Reveal elements with fade only (no movement)
  var revealSelectors = [
    '.navbar',
    '.about',
    '.nav-links',
    'h1', 'h2', 'h3', 'p', 'ul', 'li', 'a'
  ];
  var revealNodes = document.querySelectorAll(revealSelectors.join(','));
  for (var i = 0; i < revealNodes.length; i += 1) {
    var el = revealNodes[i];
    el.style.opacity = '0';
    el.style.transition = (el.style.transition ? el.style.transition + ', ' : '') + 'opacity 700ms ease-out';
  }

  // Intersection-based fade-in (no translate/scale)
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j += 1) {
        var e = entries[j];
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.1 });

    for (var k = 0; k < revealNodes.length; k += 1) {
      io.observe(revealNodes[k]);
    }
  } else {
    // Fallback: show all if IO not supported
    for (var m = 0; m < revealNodes.length; m += 1) {
      revealNodes[m].style.opacity = '1';
    }
  }

  // Hard-disable any text movement/zoom on hover (defensive)
  var style = document.createElement('style');
  style.textContent = [
    'h1, h2, h3, h4, h5, h6, p, li, a, span {',
    '  transform: none !important;',
    '}',
    'h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover, p:hover, li:hover, a:hover, span:hover {',
    '  transform: none !important;',
    '}',
    // Optional gentle visual feedback without movement
    'p { transition: background-color 200ms ease; }',
    'p:hover { background-color: rgba(0, 255, 255, 0.08); }'
  ].join('\n');
  document.head.appendChild(style);
});

// انیمیشن ورود صفحه
document.addEventListener('DOMContentLoaded', function() {
    // مخفی کردن تمام عناصر در ابتدا
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(30px)';
    document.body.style.transition = 'all 1s ease-out';
    
    // نمایش تدریجی صفحه
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
    
    // انیمیشن نوار ناوبری
    const navbar = document.getElementById('navbar');
    navbar.style.transform = 'translateY(-100px)';
    navbar.style.transition = 'transform 0.8s ease-out';
    
    setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
    }, 300);
    
    // انیمیشن محتوای اصلی
    const aboutContent = document.querySelector('.about');
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateX(-50px)';
    aboutContent.style.transition = 'all 1s ease-out';
    
    setTimeout(() => {
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateX(0)';
    }, 600);
    
    // انیمیشن تدریجی عناصر داخلی
    const headings = document.querySelectorAll('h3');
    const paragraphs = document.querySelectorAll('p');
    const lists = document.querySelectorAll('ul');
    
    // تنظیم حالت اولیه
    [...headings, ...paragraphs, ...lists].forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    });
    
    // نمایش تدریجی عناصر
    setTimeout(() => {
        [...headings, ...paragraphs, ...lists].forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 1000);
    
    // افکت نور نئونی برای عناوین
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
            this.style.transform = 'scale(1)';
        });
    });
    
    // افکت hover برای پاراگراف‌ها (بدون زوم)
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
            this.style.borderRadius = '10px';
            this.style.padding = '15px';
            this.style.transition = 'background-color 0.3s ease, border-radius 0.3s ease, padding 0.3s ease';
        });
        
        paragraph.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderRadius = '';
            this.style.padding = '';
        });
    });
    
    // افکت لیست‌ها
    lists.forEach(list => {
        list.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 0, 255, 0.1)';
            this.style.borderRadius = '10px';
            this.style.padding = '15px';
            this.style.transition = 'all 0.3s ease';
        });
        
        list.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderRadius = '';
            this.style.padding = '';
        });
    });
    
    // افکت اسکرول
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.about');
        const speed = scrolled * 0.5;
        
        parallax.style.transform = `translateY(${speed}px)`;
    });
    
    // افکت کلیک برای تمام عناصر قابل کلیک
    const clickableElements = document.querySelectorAll('a, button');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // ایجاد افکت موج
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// اضافه کردن استایل‌های CSS برای افکت‌ها
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* انیمیشن نور نئونی */
    @keyframes neon-glow {
        0%, 100% {
            text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
        }
        50% {
            text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
    }
    
    /* انیمیشن شناور حذف شد - نوشته‌ها ثابت می‌مانند */
`;

document.head.appendChild(style);