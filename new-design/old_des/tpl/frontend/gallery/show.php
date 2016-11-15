<div id="gallery">
<?php foreach ($gallery as $obj): ?>
	<div class="gallery-item grow-rotate">
		<?php if(file_exists(HOST.IMG_GALLERY_PATH.'/'.$obj->id.'.jpg')): ?>
			<a href="<?php echo IMG_GALLERY_PATH.'/'.$obj->id.'.jpg'; ?>" data-size="1600x1067" title="<?php echo get_h1(); ?>">
				<img src="<?php echo IMG_GALLERY_PATH.'/_'.$obj->id.'.jpg'; ?>" alt="<?php echo $obj->pole; ?>">
			</a>
		<?php endif; ?>	
	</div>	
<?php endforeach; ?>
</div>
<!-- pager -->
<?php 
echo gallery::count_gallery()>GALLERY_AT_PAGE ? pager::pager_J(isset($_GET['url']) ? "gallery/".$_GET['url'] : "gallery",GALLERY_AT_PAGE,gallery::count_gallery(),intval($_GET['page'])) : '';
?>	