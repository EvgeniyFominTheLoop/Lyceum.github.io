			<div class="g_wrap g_list">
			
	<?php foreach ($gallery as $obj): ?>
						
				<a class="g_item" href="<?php echo '/gallery/'.$obj->url; ?>">
					<span class="g_inner">
						<?php echo images::isset_image("/images/_gallery_grupa/_".$obj->id.".jpg",$obj->pole,'style2 g_pic'); ?>
					</span>
					<span class="g_title"><?php echo $obj->pole; ?></span>
				</a>
				
	<?php endforeach; ?>
	
		</div>	
	
