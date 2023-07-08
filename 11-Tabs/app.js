const tabBtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all buttons
    tabBtn.forEach(function () {
      tabBtn.forEach(function (btn) {
        btn.classList.remove('active');
        e.target.classList.add('active');
      });
      // hide all articles
      content.forEach(function (content) {
        content.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    });
  }
});
