const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.sidebar-toggle');

closeBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
menuBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
