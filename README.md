# ling-xiaoyi.github.io
<h1>凌小依的世界</h1>
<!DOCTYPE html>
<html>
<head>
	<title>凌小依的个人博客</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<header>
		<h1>凌小依的个人博客</h1>
		<nav>
			<ul>
				<li><a href="#">首页</a></li>
				<li><a href="#">关于我</a></li>
				<li><a href="#">博客</a></li>
				<li><a href="#">联系我</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<section>
			<h2>最新博客</h2>
			<article>
				<h3>如何学习前端技术？</h3>
				<p>学习前端技术需要掌握HTML、CSS和JavaScript等基础知识，可以通过在线教程、视频教程和书籍等途径来学习。</p>
				<a href="#">阅读更多</a>
			</article>
			<article>
				<h3>我的职业规划</h3>
				<p>我计划在未来几年内成为一名优秀的前端工程师，并在技术方面不断提升自己。</p>
				<a href="#">阅读更多</a>
			</article>
		</section>
		<aside>
			<h2>关于我</h2>
			<img src="avatar.jpg" alt="凌小依的头像">
			<p>我是一名前端工程师，热爱编程和设计，喜欢分享我的知识和经验。</p>
			<a href="#">了解更多</a>
		</aside>
	</main>
	<footer>
		<p>© 2021 凌小依的个人博客</p>
	</footer>

	<script>
		// 页面加载完成后执行
		window.onload = function() {
			// 获取所有文章的链接
			var links = document.querySelectorAll('article a');
			// 给每个链接添加点击事件
			links.forEach(function(link) {
				link.addEventListener('click', function(event) {
					// 阻止默认行为
					event.preventDefault();
					// 获取链接的URL
					var url = link.getAttribute('href');
					// 在新窗口中打开链接
					window.open(url, '_blank');
				});
			});
		};
	</script>
</body>
</html>
