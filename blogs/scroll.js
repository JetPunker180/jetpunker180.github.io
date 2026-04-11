document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.blog-grid');
  const btnLeft = document.getElementById('slideLeft');
  const btnRight = document.getElementById('slideRight');

  if (grid && btnLeft && btnRight) {
    // Scroll by the width of one card (300px) + the gap (30px)
    const scrollAmount = 330; 

    btnRight.addEventListener('click', () => {
      grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    btnLeft.addEventListener('click', () => {
      grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Reset scroll to 0 on page refresh to ensure sidebar is visible
    grid.scrollLeft = 0;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('heroSlider');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');
  
  let index = 0;
  const totalSlides = slides.length;

  function moveSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    // If on the last slide, loop back to the first
    index = (index === totalSlides - 1) ? 0 : index + 1;
    moveSlider();
  });

  prevBtn.addEventListener('click', () => {
    // If on the first slide, loop to the last
    index = (index === 0) ? totalSlides - 1 : index - 1;
    moveSlider();
  });

  // Optional: Auto-slide every 7 seconds
  setInterval(() => {
    nextBtn.click();
  }, 7000);
});