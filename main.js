
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

window.addEventListener('scroll', checkScrollIn, false);
window.addEventListener('resize', checkScrollIn, false);


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

window.addEventListener('scroll', checkScrollOut, false);
window.addEventListener('resize', checkScrollOut, false);