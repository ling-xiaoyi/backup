function countdown(endDate, outputElementId) {
   const outputElement = document.getElementById(outputElementId);
 
   // 更新倒计时
   function updateCountdown() {
     const currentDate = new Date();
     const distance = endDate - currentDate;
 
     // 计算剩余时间
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
     // 将倒计时输出到指定元素中
     outputElement.innerHTML = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
 
     // 如果倒计时结束，则显示特定信息
     if (distance < 0) {
       clearInterval(countdownInterval);
       outputElement.innerHTML = '倒计时结束';
     }
   }
 
   // 初始化倒计时
   updateCountdown();
 
   // 每秒更新一次倒计时
   const countdownInterval = setInterval(updateCountdown, 1000);
 }
 
 // 设置倒计时结束日期和要显示倒计时的元素ID
 const endDate = new Date('2023-12-03T23:59:59');
 const outputElementId = 'countdown';
 
 // 开始倒计时
 countdown(endDate, outputElementId);
 