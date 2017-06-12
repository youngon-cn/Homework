var banners = document.querySelector('.banners');
var dots = document.querySelectorAll('.dot');
var num = 1;

function next() {
  if (num === 4) num = 0;
  banners.style.transform = 'translate(-' + num * 500 +'px, 0)';
  dots[0].style.color = 'black';
  dots[1].style.color = 'black';
  dots[2].style.color = 'black';
  dots[3].style.color = 'black';
  dots[num].style.color = 'red';
  num += 1;
}

function turn(n) {
  num = n;
  next();
}

dots[0].addEventListener('click', () => turn(0));
dots[1].addEventListener('click', () => turn(1));
dots[2].addEventListener('click', () => turn(2));
dots[3].addEventListener('click', () => turn(3));

setInterval(next, 3000);
