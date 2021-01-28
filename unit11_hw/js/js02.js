$(document).ready(function() {
var plus = '<i class="fa fa-plus" aria-hidden="true"></i>';
var mimus = '<i class="fa fa-minus" aria-hidden="true"></i>';

$('#pc1').show();

$('#btn-1').click(function() {
	if($('#btn-1').html() == plus) {
		$('#btn-1').html(mimus);
	}else {
		$('#btn-1').html(plus);
	}

	$('#btn-2').html(plus);
	$('#btn-3').html(plus);
	$('#btn-4').html(plus);

	$('#pc1').slideToggle();
	$('#pc2').hide();
	$('#pc3').hide();
	$('#pc4').hide();
});

$('#pc2').hide();
$('#btn-2').click(function() {
	if($('#btn-2').html() == plus) {
		$('#btn-2').html(mimus);
	}else {
		$('#btn-2').html(plus);
	}

	$('#btn-1').html(plus);
	$('#btn-4').html(plus);
	$('#btn-3').html(plus);

	$('#pc2').slideToggle();
	$('#pc1').hide();
	$('#pc3').hide();
	$('#pc4').hide();
});

$('#pc3').hide();
$('#btn-3').click(function() {
	if($('#btn-3').html() == plus) {
		$('#btn-3').html(mimus);
	}else {
		$('#btn-3').html(plus);
	}

	$('#btn-1').html(plus);
	$('#btn-2').html(plus);
	$('#btn-4').html(plus);

	$('#pc3').slideToggle();
	$('#pc4').hide();
	$('#pc2').hide();
	$('#pc1').hide();
});

$('#pc4').hide();
$('#btn-4').click(function() {
	if($('#btn-4').html() == plus) {
		$('#btn-4').html(mimus);
	}else {
		$('#btn-4').html(plus);
	}

	$('#btn-1').html(plus);
	$('#btn-2').html(plus);
	$('#btn-3').html(plus);

	$('#pc4').slideToggle();
	$('#pc3').hide();
	$('#pc2').hide();
	$('#pc1').hide();
});
});