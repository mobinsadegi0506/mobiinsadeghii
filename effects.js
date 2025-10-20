// Spectacular Visual Effects
class VisualEffects {
  constructor() {
    this.init();
  }

  init() {
    this.createMatrixRain();
    this.createGlitchEffect();
    this.createHolographicElements();
    this.addSoundVisualization();
  }

  // Matrix-style rain effect
  createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const charSize = 14;
    const columns = canvas.width / charSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = charSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * charSize, drops[i] * charSize);

        if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    setInterval(draw, 50);
  }

  // Glitch effect for text
  createGlitchEffect() {
    const title = document.querySelector('.showe h1');
    if (!title) return;

    setInterval(() => {
      if (Math.random() < 0.1) {
        title.style.textShadow = `
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0000,
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff,
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ffff00
        `;
        title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        
        setTimeout(() => {
          title.style.textShadow = '';
          title.style.transform = '';
        }, 100);
      }
    }, 2000);
  }

  // Holographic elements
  createHolographicElements() {
    const container = document.body;
    
    for (let i = 0; i < 5; i++) {
      const hologram = document.createElement('div');
      hologram.className = 'hologram-element';
      
      hologram.style.position = 'fixed';
      hologram.style.width = '200px';
      hologram.style.height = '200px';
      hologram.style.border = '2px solid rgba(0, 255, 255, 0.3)';
      hologram.style.borderRadius = '50%';
      hologram.style.pointerEvents = 'none';
      hologram.style.zIndex = '2';
      hologram.style.left = Math.random() * (window.innerWidth - 200) + 'px';
      hologram.style.top = Math.random() * (window.innerHeight - 200) + 'px';
      hologram.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
      
      container.appendChild(hologram);
      
      this.animateHologram(hologram);
    }
  }

  animateHologram(element) {
    const animate = () => {
      const x = parseFloat(element.style.left);
      const y = parseFloat(element.style.top);
      
      element.style.left = (x + Math.sin(Date.now() * 0.001) * 2) + 'px';
      element.style.top = (y + Math.cos(Date.now() * 0.001) * 2) + 'px';
      element.style.transform = `rotate(${Date.now() * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`;
      
      requestAnimationFrame(animate);
    };
    animate();
  }

  // Sound visualization (visual only)
  addSoundVisualization() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.bottom = '20px';
    canvas.style.right = '20px';
    canvas.style.width = '200px';
    canvas.style.height = '100px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    canvas.style.border = '1px solid rgba(0, 255, 0, 0.3)';
    document.body.appendChild(canvas);

    canvas.width = 200;
    canvas.height = 100;

    const bars = 32;
    const barWidth = canvas.width / bars;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        const barHeight = Math.random() * canvas.height * 0.8;
        const hue = 120 + (i / bars) * 60;
        
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 1, barHeight);
      }
    };

    setInterval(draw, 100);
  }
}

// Initialize effects when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new VisualEffects();
});
