// Scroll reveal for room cards
(function() {
  var cards = Array.prototype.slice.call(document.querySelectorAll('.room-card'));
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    cards.forEach(function(c, i){
      setTimeout(function(){ c.classList.add('visible'); }, 80 * i);
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(function(card){ observer.observe(card); });
})();

// Hover parallax effect on images
(function(){
  var thumbs = Array.prototype.slice.call(document.querySelectorAll('.room-card .thumb'));
  thumbs.forEach(function(thumb) {
    var img = thumb.querySelector('img');
    if (!img) return;
    thumb.addEventListener('mousemove', function(e){
      var rect = thumb.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      var y = (e.clientY - rect.top) / rect.height - 0.5;  // -0.5..0.5
      var maxTilt = 6;
      thumb.style.transform = 'perspective(700px) rotateX(' + (-y * maxTilt) + 'deg) rotateY(' + (x * maxTilt) + 'deg)';
      img.style.transform = 'scale(1.1) translate(' + (x * 6) + 'px,' + (y * 6) + 'px)';
    });
    thumb.addEventListener('mouseleave', function(){
      thumb.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
      img.style.transform = '';
    });
  });
})();

// Micro interaction on reserve buttons
(function(){
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.reserveBtn'));
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.style.transform = 'translateY(-1px) scale(1.02)';
      btn.style.filter = 'brightness(1.1)';
      setTimeout(function(){
        btn.style.transform = '';
        btn.style.filter = '';
        alert('رزرو شما ثبت شد! (نمونه)');
      }, 180);
    });
  });
})();

    function goToBooking() {
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const roomType = document.getElementById('room-type').value;
      const guests = document.getElementById('guests').value;

      if (!checkin || !checkout || !roomType || !guests) {
        alert("لطفاً همه فیلدها را کامل کنید.");
        return;
      }

      // انتقال به صفحه رزرو تستی
      window.open("https://webzi.ir/booking", "_blank");
    }