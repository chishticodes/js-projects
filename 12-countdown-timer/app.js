const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 30, 0);
// let futureDate = new Date(2023, 7, 14, 17, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const fdate = futureDate.getDate();

const month = futureDate.getMonth();
const day = futureDate.getDay();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${fdate}th ${months[month]}  ${year} ${hours}:${mins}am`;

// future time in miliseconds
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s= 1000ms
  // 1min = 60sec
  // 60mins = 1hr
  // 24hr = 1day

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  const daysRemaining = Math.floor(t / oneDay);
  const hoursR = t % oneDay;
  const hoursRemaining = Math.floor(hoursR / oneHour);
  const minsR = hoursR % oneHour;
  const minsRemaining = Math.floor(minsR / oneMin);
  const secsR = minsR % oneMin;
  const secsRemaining = Math.floor(secsR / oneSec);

  const values = [daysRemaining, hoursRemaining, minsRemaining, secsRemaining];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway is expired </h4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
