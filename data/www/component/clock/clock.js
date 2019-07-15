const hour = document.querySelector(".hour.hand");
const minute = document.querySelector(".minute.hand");
const second = document.querySelector(".second.hand");

setInterval(() => {
  const date = new Date();
  const s = (360 / 60) * date.getSeconds();
  const m = (360 / 60) * date.getMinutes() + (s / 60);
  const h = (360 / 24) * date.getHours() + (m / 24);
  
  second.style.transform = `rotate(${s}deg)`;
  minute.style.transform = `rotate(${m}deg)`;
  hour.style.transform = `rotate(${h}deg)`;
}, 1000);