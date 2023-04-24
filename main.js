
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

// animate cards
const rowcards = document.querySelectorAll('.rowcard');
const cards = [...rowcards, ...document.querySelectorAll('.colcard')];
console.log(cards);
fraction = .3;

function checkScrollRowCard() {
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

window.addEventListener('scroll', checkScrollRowCard, false);
window.addEventListener('resize', checkScrollRowCard, false);

