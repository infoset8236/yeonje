$(document).ready(() => {
	const updateTime = () => {
		const now = new Date();
		$('.time').text(now.toTimeString().slice(0, 5));
		$('.date').text(now.toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			weekday: 'long'
		}).replace(/(\d+)년 (\d+)월 (\d+)일/, '$1. $2. $3.'));
	};

	updateTime();
	setInterval(updateTime, 60000);


	$('.pc_slide').slick({
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: false,
		swipe: false,
		infinite: true,
		variableWidth: true,
	});

	$('.pc_slide_prev, .pc_slide_next').click(function () {
		if ($('.pc_slide').hasClass('slick-initialized')) {
			$('.pc_slide').slick($(this).hasClass('main-popup-pc_slide_prev') ? 'slickPrev' : 'slickNext');
		}
	});
});