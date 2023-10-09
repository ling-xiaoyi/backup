sidobj = document.getElementById('sid');
s = 10;
sobj = setInterval(function () {
  sidobj.innerHTML = --s;
  if (s == 0) {
    location = 'lingxiaoyi/index0.html';
  }
}, 1000);