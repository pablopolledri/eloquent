const grid = document.querySelector('.grid');
imagesLoaded(grid, () => {
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
});

// Solo activar GLightbox en escritorio
if (window.innerWidth > 768) {
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: false,
    zoomable: true
  });
} else {
  // En móvil, eliminar clases que activan GLightbox
  document.querySelectorAll('.glightbox').forEach(el => {
    el.classList.remove('glightbox');
    el.classList.add('no-lightbox');
  });
}
