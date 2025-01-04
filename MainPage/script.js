const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentAngle = 0;
const angle = 36; // Ugao po slici
const radius = 500; // Poluprečnik kruga

// Postavi slike u kružni oblik
function setupCarousel() {
  items.forEach((item, index) => {
    const rotation = angle * index;
    const x = radius * Math.sin((rotation * Math.PI) / 180);
    const z = radius * Math.cos((rotation * Math.PI) / 180);
    item.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
  });
}

// Rotacija karusela
function rotateCarousel(direction) {
  if (direction === 'next') {
    currentAngle -= angle;
  } else {
    currentAngle += angle;
  }
  carousel.style.transform = `translateZ(1000px) rotateY(${currentAngle}deg)`;
}

prevButton.addEventListener('click', () => rotateCarousel('prev'));
nextButton.addEventListener('click', () => rotateCarousel('next'));

// Inicijalizacija
setupCarousel();
