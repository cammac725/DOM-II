// Your code goes here
const container = document.querySelector('.container');
container.addEventListener('dblclick', function (event) {
  console.log(event);
  event.target.style.color = 'red';
});

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', function (event) {
  event.target.style.color = 'crimson';
});
logo.addEventListener('mouseleave', function (event) {
  event.target.style.color = '#212529';
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
  console.log(event);
  event.target.style.color = 'magenta';
});

const contentImg = document.querySelectorAll('.img-content img');
contentImg[0].addEventListener('drag', function (event) {
  event.target.style.opacity = '0.3';
});
contentImg[0].addEventListener('dragend', function (event) {
  event.target.style.opacity = '1';
});





// // const window = document.querySelector('window');
// window.addEventListener('resize', function (event) {
//   event.target.style.backgroundColor = 'lightblue';
// });
