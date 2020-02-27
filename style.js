const hamburger = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.menu-mobile');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  mobile_nav.classList.toggle('menu-mobile--active');
}

hamburger.addEventListener('click', handleClick);

let timer = setInterval(function () {

  let endDate = new Date("July 04, 2020 16:00:00 GMT+0100");
  let now = new Date();
  let t = endDate.getTime() - now.getTime();;

  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((t % (1000 * 60)) / 1000);

  const numbers = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

  // days
  if (days > 0) {
    document.querySelector("#timer-days").innerHTML = days;
    document.querySelector('.timer-days p').innerHTML = 'dni';
  }

  else {
    document.querySelector(".timer-days").style.display = "none";
  }

  // hours
  if (hours >= 0) {
    document.querySelector("#timer-hours").innerHTML = ('0' + hours).slice(-2);
  }

  else if (days <= 0) {
    document.querySelector(".timer-hours").style.display = "none";
  }

  if (numbers.map(number => number === hours)) {
    document.querySelector('.timer-hours p').innerHTML = 'godzin';
  }

  else {
    document.querySelector('.timer-hours p').innerHTML = 'godzin';
  }

  // mins
  if (mins >= 0) {
    document.querySelector("#timer-mins").innerHTML = ('0' + mins).slice(-2);
  }

  else if (days <= 0 && hours <= 0) {
    document.querySelector(".timer-mins").style.display = "none";
  }

  if (numbers.map(number => number === mins)) {
    document.querySelector('.timer-mins p').innerHTML = 'minut';
  }

  else {
    document.querySelector('.timer-mins p').innerHTML = 'minut';
  }

  secs
  if (secs > 0) {
    document.querySelector("#timer-secs").innerHTML = secs;
  }

  else if (t <= 0) {
    clearInterval(timer);
    document.querySelector("#timer").style.display = "none";
    document.querySelector("#table").style.display = "block";
  }

  if (numbers.map(number => number === secs)) {
    document.querySelector('.timer-secs p').innerHTML = 'sekund';
  }

  else {
    document.querySelector('.timer-secs p').innerHTML = 'sekund';
  }

}, 1000);
