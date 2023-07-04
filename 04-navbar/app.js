// selecting elements

const toggle = document.querySelector('.nav-toggle');
const ul = document.querySelector('.links');

toggle.addEventListener('click', function () {
  // my code works fine

  // if (ul.classList.contains('show-links')) {
  //   ul.classList.remove('show-links');
  // } else {
  //   ul.classList.add('show-links');
  // }

  // can be done in a single line

  ul.classList.toggle('show-links');
});
