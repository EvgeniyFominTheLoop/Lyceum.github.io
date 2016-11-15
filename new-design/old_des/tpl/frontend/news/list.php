<?php foreach ($news as $obj): ?>
	<div class="news-box">
		<div class="news-img-list">
			<a href="<?php echo '/news/'.$obj->url; ?>">
				<?php echo images::isset_image("/images/_news/_".$obj->id.".jpg",$obj->zag,'news_th'); ?>
			</a>
		</div>
		<div><a href="<?php echo '/news/'.$obj->url; ?>"><?php echo $obj->zag; ?></a></div>
		<div><?php echo system::show_data($obj->date_news); ?></div>
		<div><?php echo $obj->text_short; ?></div>
	</div>
<?php endforeach; ?>
<!-- PEGINATOR -->
<?php 
	echo news::count_news()>NEWS_AT_PAGE ? pager::pager_J(isset($_GET['type']) ? "news/type/".$_GET['type'] : "news",NEWS_AT_PAGE,news::count_news(),intval($_GET['page'])) : '';
?>