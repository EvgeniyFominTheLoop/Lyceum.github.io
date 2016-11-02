<?php foreach ($gallery as $obj): ?>
	<div class="col-xs-12 col-sm-6 col-md-6 gallery">
		<div class="news-box">
			<ins>
				<?php if(file_exists(HOST.IMG_GALLERY_PATH.'/'.$obj->id.'.jpg')): ?>
					<a href="<?php echo IMG_GALLERY_PATH.'/'.$obj->id.'.jpg'; ?>" rel="example1">
						<div class="grow-rotate">
							<img src="<?php echo IMG_GALLERY_PATH.'/_'.$obj->id.'.jpg'; ?>" class="style2" alt="<?php echo $obj->pole; ?>" title="<?php echo $obj->pole; ?>">
						</div>
					</a>
				<?php endif; ?>	
			</ins>
		</div>
	</div>	
<?php endforeach; ?>

		
	<script type="text/javascript">
	$(document).ready(function(){
		<!-- colorbox -->
	  $("a[rel='example1']").colorbox();
	});
	</script>				
		
	
	<?php 
	// pager
	echo gallery::count_gallery()>GALLERY_AT_PAGE ? pager::pager_J(isset($_GET['url']) ? "gallery/".$_GET['url'] : "gallery",GALLERY_AT_PAGE,gallery::count_gallery(),intval($_GET['page'])) : '';
	?>	