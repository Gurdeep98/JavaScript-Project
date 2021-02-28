const daysele = document.getElementById('days');
const hoursele = document.getElementById('hours');
const minele = document.getElementById('min');
const secondsele = document.getElementById('seconds');
const holidate = '18 december 2021';

function countdown() {
  const holi = new Date(holidate);
  const currentdate = new Date();

  const totalseconds = (holi - currentdate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;
  console.log(days, hours, minutes, seconds);

  daysele.innerHTML = days;
  hoursele.innerHTML = hours;
  minele.innerHTML = minutes;
  secondsele.innerHTML = seconds;
}
function foramattime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
