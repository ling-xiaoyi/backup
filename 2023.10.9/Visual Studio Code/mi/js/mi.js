// 获取元素
var list_p = document.querySelectorAll('.list>p');
var image_table = document.querySelectorAll('.image>table');

list_p.forEach(function(value,index) {
  // value 代表每一个 li 
  // index  代表即将选中的图片的索引
  value.onclick = function() {
    for(var i = 0;i < list_p.length;i++) {
      // i代表当前的索引值
      // classList.remove   去除类名
      list_p[i].classList.remove('active')
      image_table[i].classList.remove('active')
    }
    // value 代表点击后的列表选项
    value.classList.add('active');
    // 跟随列表改变的图片添加 active类名
    image_table[index].classList.add('active')
  }
})