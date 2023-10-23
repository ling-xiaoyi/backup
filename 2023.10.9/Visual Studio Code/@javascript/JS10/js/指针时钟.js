// 获取表盘刻度 ul 
var ul = document.getElementsByClassName('scale')[0];
// 1. 声明空字符串
var strLi = '';
// 2. 循环 每一个 li  让li 围绕 ul 表盘转360度，也就是一个 li 旋转 6度   360/60    60是有60个li 刻度
for (var i = 1; i <= 60; i++) {
  // 3. 判断 当 第五个是长的，也就是 i%5==0 时 ，给这个li 增加高
  if (i % 5 == 0) {
    strLi += '<li style="transform:rotate(' + (i * 6 - 0.5) + 'deg);height:18px;"></li>'
  }
  strLi += '<li style="transform:rotate(' + (i * 6 - 0.5) + 'deg);"></li>'
}
ul.innerHTML = strLi;

// 获取时、分、秒
var hourHand = document.getElementsByClassName('hour')[0];
var minuteHand = document.getElementsByClassName('minute')[0];
var secondHand = document.getElementsByClassName('second')[0];

// 执行时间函数
function getTime() {
  // 获取当前时间
  var time = new Date();
  // 获取当前的时间的小时   getHours()时的方法
  var hours = time.getHours();
  // 获取当前的时间的分钟    getMinutes() 分的方法
  var minutes = time.getMinutes();
  // 获取当前的时间的 秒   getSecond()  秒的方法
  var seconds = time.getSeconds();

  // 改变秒针样式旋转的度数   6度    当前时间的秒 * 6  每一秒旋转 6度
  secondHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
  // 改变分针样式旋转的度数   6度    当前时间的每一分钟 * 6  秒针转一圈360度之后 ，每一分钟旋转 6度
  minuteHand.style.transform = "rotate(" + (minutes * 6) + "deg)";
  // 改变时针样式旋转的度数   30度   
  hourHand.style.transform = "rotate(" + (hours * 30) + "deg)";
}
setInterval(getTime, 1000);