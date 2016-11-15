<div id="gallery">
<?php foreach ($gallery as $obj): ?>
	<div class="gallery-item">
		<a href="<?php echo '/gallery/'.$obj->url; ?>">
			<?php echo images::isset_image("/images/_gallery_grupa/_".$obj->id.".jpg",$obj->pole,'style2 g_pic'); ?>
			<h4><?php echo $obj->pole; ?></h4>
		</a>
	</div>
<?php endforeach; ?>
</div>
