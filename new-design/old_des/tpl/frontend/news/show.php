<div class="col-xs-12 col-sm-6 col-md-6 gallery">
	<div class="news-box news-img-show">
		<div class="grow-rotate">
			<?php echo images::isset_image(IMG_NEWS_PATH."/".$obj->id.".jpg",$obj->zag,'floatleft', 'align="left"'); ?>
		</div>
	</div>
</div>
<div class="text-center">
	<h4><?php echo system::show_data($obj->date_news); ?></h4>
</div>

<?php echo $obj->text; ?>

<div class="text-center news-footer">
	<a href="/news<?php echo(TYPE_NEWS==1 ? "/type/".$obj->type : "")?>">Всі новини <i class="fa fa-arrow-circle-right"></i></a>
</div>
		