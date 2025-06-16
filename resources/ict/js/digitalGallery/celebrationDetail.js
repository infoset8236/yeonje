$(document).ready(function () {
	$('.slide').slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		swipe: true,
		infinite: true,
	});

	// 이전/다음 버튼
	$('.slide_prev, .slide_next').click(function () {
		if ($('.slide').hasClass('slick-initialized')) {
			$('.slide').slick($(this).hasClass('slide_prev') ? 'slickPrev' : 'slickNext');
		}
	});
});