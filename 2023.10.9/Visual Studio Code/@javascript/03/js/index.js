// 获取轮播容器和轮播内容
const container = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');

// 设置轮播初始位置
let position = 0;

// 自动轮播函数
function slide() {
  position -= container.offsetWidth;
  if (position < -slider.offsetWidth) {
    position = 0;
  }
  slider.style.transform = `translateX(${position}px)`;
  
  // 设置轮播时间间隔（可根据需要调整）
  setTimeout(slide, 3000);
}

// 启动自动轮播
setTimeout(slide, 3000);


// document.getElementById()