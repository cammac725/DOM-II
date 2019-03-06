// Your code goes here
const container = document.querySelectorAll('.container');
container[1].addEventListener('dblclick', function (event) {
  event.currentTarget.style.color = 'red';
});

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', function (event) {
  event.target.style.color = 'crimson';
});
logo.addEventListener('mouseleave', function (event) {
  event.target.style.color = '#212529';
});
logo.addEventListener('click', function (event) {
  TweenMax.to(".logo-heading", 2, { x: 75, ease: Elastic.easeOut.config(2, 0.2) });
});


const introImg = document.querySelector('.intro img');
introImg.addEventListener('wheel', function (event) {
  event.target.style.opacity = '0.5';
});
introImg.addEventListener('mouseenter', function (event) {
  event.target.style.opacity = '1.0';
});

const imgHeader = document.querySelector('.intro h2');
imgHeader.addEventListener('dblclick', function (event) {
  event.target.style.textTransform = 'uppercase';
  event.stopPropagation();
});
imgHeader.addEventListener('mouseleave', function (event) {
  event.target.style.textTransform = 'lowercase';
});

const destinationContent = document.querySelectorAll('.destination p');
destinationContent[0].addEventListener('copy', function (event) {
  event.target.style.color = 'magenta';
});

const contentImg = document.querySelectorAll('.img-content img');
contentImg[0].addEventListener('drag', function (event) {
  event.target.style.opacity = '0.3';
});
contentImg[0].addEventListener('dragend', function (event) {
  event.target.style.opacity = '1';
});
contentImg[1].addEventListener('mousedown', function (event) {
  event.target.style.visibility = 'hidden';
});
contentImg[1].addEventListener('mouseup', function (event) {
  event.target.style.visibility = 'visible';
});

const destHeader = document.querySelectorAll('.destination h4');
destHeader[1].addEventListener('mousemove', function (event) {
  event.target.textContent = "You'll love it!";
});

const anchorTag = document.querySelectorAll('a');
anchorTag.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
  })
});

const destBtn = document.querySelectorAll('.destination .btn');
destBtn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    TweenMax.to(".btn", 2, { rotation: 360 });
  })
})


// // const window = document.querySelector('window');
// window.addEventListener('resize', function (event) {
//   event.target.style.backgroundColor = 'lightblue';
// });
// x: 400, ease: Bounce.easeOut 