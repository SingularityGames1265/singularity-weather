document.addEventListener("DOMContentLoaded", function () {

const colors = ['white', 'lightgray', 'gray'];

  document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';

    const color = colors[Math.floor(Math.random() * colors.length)];
    trail.style.background = color;

    const spread = 10;
    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;
    const rotation = Math.random() * 360;

    trail.style.left = (e.clientX + offsetX) + 'px';
    trail.style.top = (e.clientY + offsetY) + 'px';
    trail.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  });

  sessionStorage.setItem(pageKey, "true");

});
