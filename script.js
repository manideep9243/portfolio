// script.js

// Project scroller navigation
const scroller = document.querySelector('.project-scroller');
const cards = document.querySelectorAll('.project-card');
let currentIndex = 0;

function updateScroller() {
    scroller.scrollBy({
        left: currentIndex * scroller.clientWidth,
        behavior: 'smooth'
    });
}

document.getElementById('next-project').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateScroller();
});

document.getElementById('prev-project').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateScroller();
});
// Image modal functionality
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', () => {
        openImageModal(image.src);
    });
});
  function openImageModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').classList.remove('hidden');
  }

  function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
    document.getElementById('modalImage').src = '';
  }


