
// navbar-banner transition
const navbar = document.getElementById('navbar');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
}

// animate cards in
const rowcards = document.querySelectorAll('.rowcard');
const cards = [...rowcards, ...document.querySelectorAll('.colcard')];
console.log(cards);
fraction = .3;

function checkScrollIn() {
  for (let i = 0; i < cards.length; i++) {

    let card = cards[i];

    let x = card.offsetLeft, y = card.offsetTop, w = card.offsetWidth, h = card.offsetHeight, r = x + w, //right
      b = y + h, //bottom
      visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    console.log(visible > fraction);
    if (visible > fraction) {
      card.classList.add('slideIn');
    }
  }
}

// window.addEventListener('scroll', checkScrollIn, false);
// window.addEventListener('resize', checkScrollIn, false);


// animate cards out
fractionOut = .3;

function checkScrollOut() {
  for (let i = 0; i < cards.length; i++) {

    let card = cards[i];

    let x = card.offsetLeft, y = card.offsetTop, w = card.offsetWidth, h = card.offsetHeight, r = x + w, //right
      b = y + h, //bottom
      visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    console.log(visible > fractionOut);
    if (visible > fractionOut) {
      card.classList.add('slideIn');
    }
  }
}

// window.addEventListener('scroll', checkScrollOut, false);
// window.addEventListener('resize', checkScrollOut, false);

// scroll-scale-up
function scaleImages() {
  const images = document.querySelectorAll('.scroll-scale-up');
  const windowHeight = window.innerHeight;

  images.forEach(image => {
    console.log(image);
    const imageRect = image.getBoundingClientRect();
    const imageTop = imageRect.top;
    const imageBottom = imageRect.bottom;

    // Calculate the scale factor based on the image's position relative to the viewport
    const scale = 1 + 0.2 * (1 - (imageTop / windowHeight));

    // Calculate the maximum scale factor based on the image's position relative to the bottom of the viewport
    const maxScale = 1 + 0.3 * ((windowHeight - imageTop) / (imageBottom - imageTop));

    // Limit the scale factor to a range of 1 to the maximum scale factor
    const scaledValue = Math.min(maxScale, Math.max(1, scale));

    // Apply the scaling transform to the current image
    image.style.transform = `scale(${scaledValue})`;
  });
}

// Add event listener for scroll to call the scaleImages function
window.addEventListener('scroll', scaleImages);
window.addEventListener('resize', scaleImages);
// Call the function on initial load
window.addEventListener('load', scaleImages);

