								
       	<?php echo images::isset_image(IMG_NEWS_PATH."/".$obj->id.".jpg",$obj->zag,'floatleft', 'align="left"'); ?>
                                    	
       	<!--<div class="floatright"><a target="_blank" href="/print/news/<?php echo $obj->id; ?>"><img src="/images/_system/printer.gif" alt="Распечатать" /></a></div>-->
		
		<?php echo $obj->zag; ?>

        <div><b><?php echo system::show_data($obj->date_news); ?></b></div>
        <?php echo $obj->text; ?>
	
	
	<?php /*
		url  		<?php echo '/news/'.$obj->url; ?>
		data  		<?php echo system::show_data($obj->date_news); ?>
		img   		<?php echo images::isset_image("/images/news/_".$obj->id.".jpg",$obj->zag,''); ?>
		zag  		<?php echo $obj->zag; ?>
		text_short	<?php echo $obj->text_short; ?>
		text 		<?php echo $obj->text; ?>
		comments 	<?php echo news::count_comment($obj->id); ?>
		id			<?php echo $obj->id; ?>
	*/?>                                    
	
	
	<div align="left">
		<span style="font-size: 18px; padding-left: 15px;">&larr;</span>&nbsp;
		<a href="/news<?php echo(TYPE_NEWS==1 ? "/type/".$obj->type : "")?>">увесь список</a>
	</div>
		