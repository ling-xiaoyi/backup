function updateClock() {
   const clockElement = document.getElementById('clock');
   const now = new Date();
   const timeString = now.toLocaleTimeString();
   clockElement.textContent = timeString;
 }

 // 使用 setInterval 每秒更新一次时间
 setInterval(updateClock, 1000);