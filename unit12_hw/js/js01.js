var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
		var close = '<i class="fa fa-times" aria-hidden="true"></i>';
		var cong = '<i class="fa fa-plus" aria-hidden="true"></i>';
		var tru = '<i class="fa fa-minus" aria-hidden="true"></i>';

$(function()
{	
var check = true;
$('#icon').click(function()
{
	
	if(check == true)
	{
		
		$('#icon').html(close).animate({  borderSpacing: -90 }, {
			 step: function(now,fx) {
	      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
	      $(this).css('-moz-transform','rotate('+now+'deg)');
	      $(this).css('transform','rotate('+now+'deg)');
		    },
			 duration:'slow'
		},'linear');

		$("#menu").animate({"left":"0px"}, "slow");
		check = !check;

	}else
	{   
		
		$('#icon').html(bar).animate({  borderSpacing: 180 }, {
			 step: function(now,fx) {
	      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
	      $(this).css('-moz-transform','rotate('+now+'deg)');
	      $(this).css('transform','rotate('+now+'deg)');
		    },
			 duration:'slow'
		},'linear');
		$("#menu").animate({"left":"-60%"}, "slow");
		check = !check;
		
	}

	});

	var check1 = true;
	$('#sup').click(function()
	{
		
		if(check1 == true)
	{
		
		$('#plus').html(tru).animate({  borderSpacing: 180 }, {
			 step: function(now,fx) {
	      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
	      $(this).css('-moz-transform','rotate('+now+'deg)');
	      $(this).css('transform','rotate('+now+'deg)');
		    },
			 duration:'slow'
		},'linear');
		$('#menu ul li ul').css({'position':'static'});
		$('#sup').css({'background':'#FF7F50'});
		
		$('#menu ul li ul').slideDown();
		check1 = !check1;

	}else
	{   
		
		$('#plus').html(cong).animate({  borderSpacing: -90 }, {
			 step: function(now,fx) {
	      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
	      $(this).css('-moz-transform','rotate('+now+'deg)');
	      $(this).css('transform','rotate('+now+'deg)');
		    },
			 duration:'slow'
		},'linear');
		check1 = !check1;
		$('#sup').css({'background':'#EB600C'});
		$('#menu ul li ul').slideUp();
		
	}
	});
});