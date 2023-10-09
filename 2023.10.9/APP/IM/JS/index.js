window.onload = function () {
   var fontSize = 100; // 设计稿基准字体大小
   var designWidth = 750; // 设计稿宽度

   function rem() {
       var CW = document.documentElement.clientWidth; // 当前窗口宽度
       var scale = CW / designWidth; // 计算缩放比例
       document.querySelector("html").style.fontSize = fontSize * scale + "px"; // 设置html字体大小
   }

   rem(); // 初始化执行一次
   window.onresize = rem; // 监听窗口变化，执行rem函数
};
// 以上代码适配移动端通过单位rem计算px大小