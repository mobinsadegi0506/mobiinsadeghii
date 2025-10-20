  const navbar = document.getElementById('navbar');
  const cursor = document.getElementById('cursorCircle');

  navbar.addEventListener('mousemove', function(e) {
    const rect = navbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursor.style.left = rect.left + x + 'px';
    cursor.style.top = rect.top + y + 'px';
  });

  navbar.addEventListener('mouseleave', function() {
    cursor.style.left = '-100px';
    cursor.style.top = '-100px';
  });
  const globalCursor = document.getElementById('globalCursor');

document.addEventListener('mousemove', function(e) {
  globalCursor.style.left = e.clientX + 'px';
  globalCursor.style.top = e.clientY + 'px';
});
