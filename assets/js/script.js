// --- Animated Counter and Clockwise Progress with percentage sign from JS ---
document.addEventListener('DOMContentLoaded', function () {
  let statsSeen = false;
  function animateStats() {
    if (statsSeen) return;
    statsSeen = true;
    document.querySelectorAll('.dbs-stats-num').forEach(function (el) {
      let goal = parseInt(el.getAttribute('data-goal'), 10);
      let duration = 1300;
      let curr = 0, step = 0.95;
      let interval = setInterval(() => {
        curr += step * (goal / (duration / 10));
        if (curr >= goal) { curr = goal; clearInterval(interval); }
        el.textContent = Math.round(curr) + '%';
      }, 16);

      // Animate SVG ring clockwise
      let svg = el.parentElement.querySelector('.dbs-stats-progress');
      let circumference = 2 * Math.PI * 36;
      svg.setAttribute('stroke-dasharray', circumference);
      svg.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(.72,0,.22,1)';
      setTimeout(function() {
        svg.setAttribute('stroke-dashoffset', circumference * (1 - goal / 100));
      }, 80);
    });
  }
  // Intersection Observer: trigger when stats section is visible
  let observer = new window.IntersectionObserver(function(entries){
    if(entries[0].isIntersecting) animateStats();
  }, { threshold: 0.3 });
  let statsSection = document.querySelector('.dbs-stats-section');
  if(statsSection) observer.observe(statsSection);
});


/////////////////////////////////////////////////
// Animate counters when in view
document.addEventListener('DOMContentLoaded', function () {
  let statsSeen = false;
  function animateWhyUsStats() {
    if (statsSeen) return;
    statsSeen = true;
    document.querySelectorAll('.dbs-whyus-stat-num').forEach(function (el) {
      let goal = parseInt(el.getAttribute('data-goal'), 10);
      let curr = 0, step = 1, interval = 22;
      let updateNum = setInterval(() => {
        curr += Math.max(1, Math.round(goal / 55));
        if (curr >= goal) { curr = goal; clearInterval(updateNum); }
        el.textContent = curr;
      }, interval);
    });
  }
  // Intersection Observer
  let observer = new window.IntersectionObserver(function(entries){
    if(entries[0].isIntersecting) animateWhyUsStats();
  }, { threshold: 0.25 });
  let statsSection = document.querySelector('.dbs-whyus-stats-row');
  if(statsSection) observer.observe(statsSection);
});

//////////////////
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#dbs-partners-slider', {
    type      : 'loop',
    perPage   : 3,
    perMove   : 1,
    gap       : '2rem',
     arrows    : false,
    pagination: false,
    autoplay  : true,
    interval  : 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    breakpoints: {
      991: { perPage: 3 },
      767: { perPage: 3, gap: '1rem' }
    }
  }).mount();
} );


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#dbs-testimonials-slider', {
    type: 'loop',
    perPage: 1,
    gap: '1.1rem',
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: true
  }).mount();
});

/////////animation hero section
document.addEventListener('DOMContentLoaded', () => {
  const phrases = [
    "Fast & Easy",
    "Cheap & Safe",
    "Reliable Service",
    "On-Time Delivery"
  ];

  const container = document.querySelector('.dbs-hero-animated-text');
  let index = 0;

  function showNextPhrase() {
    container.innerHTML = ''; // clear old phrase

    const span = document.createElement('span');
    span.textContent = phrases[index];
    span.style.animation = 'fadeSlideInOut 4s ease-in-out forwards';

    container.appendChild(span);

    index = (index + 1) % phrases.length;
  }

  showNextPhrase(); // initially show first phrase

  setInterval(showNextPhrase, 4000); // change every 4 seconds
});