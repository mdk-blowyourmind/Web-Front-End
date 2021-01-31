$(document).ready(function(){
	var el = $('ul');
	// console.log(el.parent());
	// console.log(el.parents());
	// console.log(el.parents('div'));
	// console.log(el.parents('body'));

	console.log($('div').find('li'));
	console.log($('li').children());
	console.log($('li').children('p'));

	console.log('================');
	console.log($('#li2').next());
	console.log($('#li2').prev());
	console.log($('#li2').siblings());

	console.log('================');
	console.log($('.class1').first());
	console.log($('.class1').eq(1));
	console.log($('.class1').filter('li'));
	console.log($('.class1').not('li'));


});

	function clickBtn(){
		// $('.myDiv').toggle();
		// $('.myDiv2').toggle();
		

		$('.myDiv').slideToggle("slow");
		$('.myDiv2').slideToggle("slow");
		$('.myDiv3').slideToggle("slow");

		$('.myDiv').fadeTo(2000,0.3);
		$('.myDiv2').fadeTo(2000,0.3);
		$('.myDiv3').fadeTo(2000,0.3);

	}