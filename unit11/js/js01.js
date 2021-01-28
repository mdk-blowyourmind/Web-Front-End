$(document).ready(function(){
	console.log($('p'));
	console.log($('web-33'));
	console.log($('#sayHello'));
	console.log($(':input'));
	console.log($(':password'));

	console.log($('#sayHello').text());
	$('#sayHello').text('Hello Web 33');

	console.log($('#sayBye').html());
	$('#sayBye').html('Bye Bye');

	$('.web-33').css('font-size','24px');

	console.log($('#myDiv').width());
	$('#myDiv').width(400);

	$('#myDiv').remove();

	$('#abc').prepend('<a href="#">Prepend</a>');
	$('#abc').append('<a href="#">Append</a>');
	$('#abc').before('<a href="#">Before</a>');
	$('#abc').after('<a href="#">After</a>');

	$('#sayHello').addClass('class-1');
	$('#sayHello').addClass('class-2');

	$('#sayHello').toggleClass('class-13');
	// $('#sayHello').removeClass('class-2');


	$('#name').click(function(){
		$(this).css('color','darkcyan');
	});

	$('#name').mouseenter(function(){
		$(this).css('color','gold');
	});

	$('#name').on('click mouseenter',function(){
		console.log(1);
		$(this).css('color', 'crimson');
	});

});