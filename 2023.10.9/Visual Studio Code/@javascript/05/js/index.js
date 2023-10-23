// 获取轮播图列表和指示器列表
const slideList = document.querySelectorAll('.dh>li');
const indicators = document.querySelectorAll('.image>li');

// 定义当前显示的轮播图索引
let currentSlide = 0;

// 切换到指定索引的轮播图
function showSlide(index) {
  // 隐藏所有轮播图和指示器
  slideList.forEach((slide) => {
    slide.style.display = 'none';
  });
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });

  // 显示指定索引的轮播图和指示器
  slideList[index].style.display = 'block';
  indicators[index].classList.add('active');
}

// 自动切换轮播图
function autoSlide() {
  currentSlide++; // 切换到下一张轮播图
  if (currentSlide >= slideList.length) {
    currentSlide = 0; // 如果已经是最后一张，则切换到第一张
  }
  showSlide(currentSlide);
}

// 绑定指示器的点击事件
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index; // 切换到点击的指示器所对应的轮播图
    showSlide(currentSlide);
  });
});

// 启动自动轮播
setInterval(autoSlide, 3000);
