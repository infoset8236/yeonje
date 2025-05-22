$(document).ready(function() {
	// 팝업 열기
	$('.list_item').on('click', function(e) {
		$('.overlay').css('display', 'block')
		$('.iframe_popup').css('display', 'flex')
	});

	// 팝업 닫기
	$('.iframe_popup_close').on('click', function() {
		$('.overlay').css('display', 'none')
		$('.iframe_popup').css('display', 'none')
	});
});