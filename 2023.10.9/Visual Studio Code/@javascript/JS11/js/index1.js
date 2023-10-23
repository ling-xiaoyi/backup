// window.onload 页面加载完成事件
window.onload = function() {
  // 获取最大盒子 box 
  var box = document.querySelector('.box');
  // 获取图片 li 
  var img = document.querySelectorAll('.image li');
  // 获取小圆点 li 
  var list = document.querySelectorAll('.list li');
  // 获取左按钮
  var left = document.querySelector('.left');
  // 获取右按钮
  var right = document.querySelector('.right');

  // 定义初始索引值为 0
  var index = 0;

  // 自动轮播
  var time = setInterval(moveR,2000);

  // 鼠标移入box 
  box.onmouseover = function() {
    clearInterval(time)
  }

  box.onmouseout = function() {
    time = setInterval(moveR,2000);
  }

  left.onclick = function() {
    moveL()
  }

  right.onclick = function() {
    moveR()
  }

  // 自动轮播和右按钮的自定义函数
  function moveR() {
    index++;
    if(index >= img.length) {
      index = 0
    }

    img.forEach(function(value){
      // value 代表当前图片元素  要清除 active 类名
      value.classList.remove('active')
    })
    // index 是索引值，代表即将到达的图片元素的索引，要添加类名
    img[index].classList.add('active')

    list.forEach(function(value){
      value.classList.remove('active')
    })
    list[index].classList.add('active')

  }

  // 左按钮自定义函数
  function moveL() {
    index--;
    if(index < 0){
      index = img.length - 1
    }

    img.forEach(function(value){
      // value 代表当前图片元素  要清除 active 类名
      value.classList.remove('active')
    })
    // index 是索引值，代表即将到达的图片元素的索引，要添加类名
    img[index].classList.add('active')

    list.forEach(function(value){
      value.classList.remove('active')
    })
    list[index].classList.add('active')

  }

  // 小圆点点击事件
  // value 代表即将到达的小圆点元素  m 代表即将到达的索引值
  list.forEach(function(value,m) {
    value.onmouseover = function() {
      list.forEach(function(value,n){
        // value 代表当前元素  n 代表当前元素索引值
        value.classList.remove('active');
        img[n].classList.remove('active')
      })

      value.classList.add('active');
      img[m].classList.add('active')

      // 让即将到达的索引值与初始索引相同，这样自动轮播就会以即将到达的那个索引为准
      index = m
    }
  })
}