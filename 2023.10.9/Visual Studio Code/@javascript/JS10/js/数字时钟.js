function showTime() {
   // 声明当前时间
   var time = new Date();
   // 声明当前年
   var year = time.getFullYear();
   // 声明当前月
   var month = time.getMonth() + 1;
   // 声明当前日
   var day = time.getDate();
   // 声明当前时
   var hour = time.getHours();
   // 声明当前分
   var minute = time.getMinutes();
   // 声明当前秒
   var second = time.getSeconds();

   // chart() 函数 就是把输入的值转换为字符
   var date = year + '年' + month + '月' + day + '日' + chart(hour) + '时' + chart(minute) + '分' + chart(second) + '秒';
   var timeBox = document.getElementsByClassName('time')[0];
   timeBox.innerHTML = date;
 }
 setInterval(showTime, 1000);
 function chart(val) {
   if (val < 10) {
     return ('0' + val);
   } else {
     return (val);
   }
 }