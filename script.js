document.addEventListener("DOMContentLoaded", function () {
  
/* ==============================
   SESSION LOAD CHECK
============================== */

const pageKey = "loaded-" + window.location.pathname;
const hasLoadedBefore = sessionStorage.getItem(pageKey);

  /* ==============================
     CURSOR TRAIL
  ============================== */

  const colors = ['white', 'lightgray', 'gray'];

  document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';

    const color = colors[Math.floor(Math.random() * colors.length)];
    trail.style.background = color;

    const spread = 10;
    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;

    trail.style.left = (e.clientX + offsetX) + 'px';
    trail.style.top = (e.clientY + offsetY) + 'px';
    trail.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  });

/* ==============================
   IMAGE LIGHTBOX
============================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

if (lightbox && lightboxImg && lightboxCaption) {

  const galleryImages = document.querySelectorAll(".image-div img");

  galleryImages.forEach(img => {

    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt || "";
      lightbox.classList.add("active");
    });

  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });

}

// Mark page as loaded for this session
sessionStorage.setItem(pageKey, "true");

});
