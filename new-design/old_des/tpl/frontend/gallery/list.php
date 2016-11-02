<?php foreach ($gallery as $obj): ?>
	<div class="col-xs-12 col-sm-6 col-md-6 gallery">
		<div class="news-box">
			<a href="<?php echo '/gallery/'.$obj->url; ?>">
				<div class="grow-rotate">
					<?php echo images::isset_image("/images/_gallery_grupa/_".$obj->id.".jpg",$obj->pole,'style2 g_pic'); ?>
					<h4><?php echo $obj->pole; ?></h4>
				</div>
			</a>
		</div>
	</div>
<?php endforeach; ?>