			<div class="thumbnails">
			
	<?php foreach ($gallery as $obj): ?>
	
				<ins class="thumbnail">
					<div class="r">
						<?php if(file_exists(HOST.IMG_GALLERY_PATH.'/'.$obj->id.'.jpg')): ?>
							<a class="img_link" href="<?php echo IMG_GALLERY_PATH.'/'.$obj->id.'.jpg'; ?>" rel="example1">
								<img src="<?php echo IMG_GALLERY_PATH.'/_'.$obj->id.'.jpg'; ?>" class="style2" alt="<?php echo $obj->pole; ?>" title="<?php echo $obj->pole; ?>">
							</a>
						<?php endif; ?>	
					</div>
				</ins>	
				
	<?php endforeach; ?>
	
		</div>	
		
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