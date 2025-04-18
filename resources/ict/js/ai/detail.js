$(document).ready(function () {
	$('.location_popup_open').click(function () {
		$('.overlay, .detail_popup').fadeIn(300);
	});

	$('.close, .overlay').click(function () {
		$('.overlay, .detail_popup').fadeOut(300);
	});

	$('.code_popup_open').click(function () {
		$('.overlay, .code_popup').fadeIn(300);
	});

	$('.code_popup_close, .overlay').click(function () {
		$('.overlay, .code_popup').fadeOut(300);
	});
});
