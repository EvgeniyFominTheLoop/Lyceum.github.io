
	<?php foreach ($news as $obj): ?>
			<div class="overflow news_item">
				<table style="border-collapse:collapse;width:100%;"><tbody><tr><td>
				<div class="overflow news_item">
					<div class="news_data"><?php echo system::show_data($obj->date_news); ?></div>
				</div>
				</td></tr><tr><td>
				<a href="<?php echo '/news/'.$obj->url; ?>"><?php echo images::isset_image("/images/_news/_".$obj->id.".jpg",$obj->zag,'news_th'); ?></a>
				</td></tr><tr><td>
				<div class="overflow news_item">
							<a href="<?php echo '/news/'.$obj->url; ?>" class="news_title"><?php echo $obj->zag; ?></a>
						</div>
				</td></tr></tbody></table>
			</div>					
	<?php endforeach; ?>
	
	<?php /*
		begin 		<?php foreach ($news as $obj): ?>
		end  		<?php endforeach; ?>
		
		url  		<?php echo '/news/'.$obj->url; ?>
		data  		<?php echo system::show_data($obj->date_news); ?>
		img   		<?php echo images::isset_image("/images/_news/_".$obj->id.".jpg",$obj->zag,''); ?>
		zag  		<?php echo $obj->zag; ?>
		text_short	<?php echo $obj->text_short; ?>
		text 		<?php echo $obj->text; ?>		
		comments 	<?php echo news::count_comment($obj->id); ?>
	*/?>