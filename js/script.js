$(document).ready(function(){
  $('.text-slider').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	prevArrow:'<a class="btn btn-default arrow-left-btn"></a>',
    nextArrow:'<a class="btn btn-default arrow-right-btn"></a>',
  });
  
  	$('.arrow-left-btn').append('<i class="fa fa-chevron-left slider-arrow-left"></i>');
  	$('.arrow-right-btn').append('<i class="fa fa-chevron-right slider-arrow-right"></i>');
 
  function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
				{
					tallestcolumn = currentHeight;
				}
			}
			);
		columns.height(tallestcolumn);
	}

	setEqualHeight($(".benefits-info"));
	
  $(".mobile-menu-button").click(function() {
		$(".menu-pills").slideToggle();
	});
});