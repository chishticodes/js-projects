let count = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const targetClass = e.currentTarget.classList;
    if (targetClass.contains('decrease')) {
      count--;
    }
    if (targetClass.contains('increase')) {
      count++;
    }
    if (targetClass.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }

    value.textContent = count;
  });
});
