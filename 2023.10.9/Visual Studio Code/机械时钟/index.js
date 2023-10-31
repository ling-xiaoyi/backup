function updateClock() {
   const clockElement = document.querySelector('.clock');
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();
   const hourHand = document.querySelector('.hour-hand');
   const minuteHand = document.querySelector('.minute-hand');
   const secondHand = document.querySelector('.second-hand');

   // 计算每个指针的角度
   const hourAngle = 30 * (hours % 12) + 0.5 * minutes;
   const minuteAngle = 6 * minutes;
   const secondAngle = 6 * seconds;

   // 更新指针的位置
   hourHand.style.transform = `rotate(${hourAngle}deg)`;
   minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
   secondHand.style.transform = `rotate(${secondAngle}deg)`;
 }

 // 使用 setInterval 每秒更新一次指针的位置
 setInterval(updateClock, 1000);