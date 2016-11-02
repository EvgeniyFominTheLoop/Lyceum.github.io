			<div class="clear news_wrap">

	<?php foreach ($news as $obj): ?>
						
				<div class="overflow news_item">
					<a href="<?php echo '/news/'.$obj->url; ?>">
						<?php echo images::isset_image("/images/_news/_".$obj->id.".jpg",$obj->zag,'news_th'); ?>
					</a>
					<div class="overflow">
						<div class="news_data"><?php echo system::show_data($obj->date_news); ?></div>
						<a href="<?php echo '/news/'.$obj->url; ?>" class="news_title"><?php echo $obj->zag; ?></a>
						<div><?php echo $obj->text_short; ?></div>
					</div>
				</div>				
						
	<?php endforeach; ?>
	
			</div>
	
	
	<?php 
	// pager
	echo news::count_news()>NEWS_AT_PAGE ? pager::pager_J(isset($_GET['type']) ? "news/type/".$_GET['type'] : "news",NEWS_AT_PAGE,news::count_news(),intval($_GET['page'])) : '';
	?>	
	
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