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
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = '//academlyceum.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
		