<?php foreach ($news as $obj): ?>
<div class="news-box">
	<div>
		<a href="<?php echo '/news/'.$obj->url; ?>"><?php echo images::isset_image("/images/_news/_".$obj->id.".jpg",$obj->zag,'news_th'); ?></a>
	</div>
	<div>
		<h4><a href="<?php echo '/news/'.$obj->url; ?>" class="news-title"><?php echo $obj->zag; ?></a></h4>
	</div>
	<div>
		<span><?php echo system::show_data($obj->date_news); ?></span>
	</div>
</div>				
<?php endforeach; ?>