$(document).ready(function () {
	const $slider = $('.festival_slide');
	const $scrollArea = $('.scroll_area');
	const $playPauseBtn = $('.play-and-pause img');
	const $overlay = $('.overlay');
	const $popup = $('.popup');
	const $popupNoBtn = $('.popup .no');
	const $currentSlide = $('.current-slide');
	const $totalSlides = $('.total-slides');
	const $progressBar = $('.progress_bar .bar');
	let isPlaying = true;
	let popupTimer = null;

	// 슬릭 슬라이드 초기화
	$slider.slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		swipe: true,
		infinite: true,
		variableWidth: true,
		asNavFor: '.scroll_area',
	});

	$scrollArea.slick({
		slidesToShow: 6,
		arrows: false,
		autoplay: false,
		dots: false,
		swipe: true,
		infinite: true,
		variableWidth: true,
		asNavFor: '.festival_slide',
		focusOnSelect: true,
	});

	// 프로그레스 바 업데이트
	function updateProgressBar(current, total) {
		const progress = ((current + 1) / total) * 100;
		$progressBar.css('width', progress + '%');
	}

	// 슬라이드 변경 시
	$slider.on('init afterChange', function (event, slick, currentSlide) {
		const slideIndex = currentSlide !== undefined ? currentSlide : slick.currentSlide;
		$currentSlide.text(slideIndex + 1);
		$totalSlides.text(slick.slideCount);
		updateProgressBar(slideIndex, slick.slideCount);

		// 이미지 선택 상태 업데이트
		$('.scroll_area img').removeClass('selected');
		$('.scroll_area .slick-slide').eq(slideIndex).find('img').addClass('selected');

		// 기존 타이머 정리
		if (popupTimer) {
			clearTimeout(popupTimer);
			popupTimer = null;
		}

		// 마지막 슬라이드일 때
		if (slideIndex === slick.slideCount - 1) {
			$slider.slick('slickPause');
			isPlaying = false;
			$playPauseBtn.attr('src', '/resources/ict/img/digitalGallery/play.svg');

			popupTimer = setTimeout(function () {
				$overlay.css('display', 'block');
				$popup.css('display', 'flex');
			}, 5000);
		}
	});

	// 초기 슬라이드 설정
	$('.scroll_area .slick-slide').eq(0).find('img').addClass('selected');

	// 이전/다음 버튼
	$('.slide_prev, .slide_next').click(function () {
		if ($('.festival_slide').hasClass('slick-initialized')) {
			$slider.slick($(this).hasClass('slide_prev') ? 'slickPrev' : 'slickNext');
		}
	});

	// 이미지 선택 시
	$('.scroll_area div img').click(function () {
		$('.scroll_area div img').removeClass('selected');
		$(this).addClass('selected');
		const index = $(this).closest('.slick-slide').data('slick-index');
		$slider.slick('slickGoTo', index);
	});

	// 재생/일시정지 토글
	$playPauseBtn.click(function (event) {
		event.preventDefault();

		if (isPlaying) {
			$slider.slick('slickPause');
			$(this).attr('src', '/resources/ict/img/digitalGallery/play.svg');
		} else {
			$slider.slick('slickPlay');
			$(this).attr('src', '/resources/ict/img/digitalGallery/pause.svg');
		}

		isPlaying = !isPlaying;
	});

	// 팝업 "아니요" 버튼 클릭 처리
	$popupNoBtn.click(function () {
		$overlay.css('display', 'none');
		$popup.css('display', 'none');
		$slider.slick('slickGoTo', 0);
		$slider.slick('slickPlay');
		isPlaying = true;
		$playPauseBtn.attr('src', '/resources/ict/img/digitalGallery/pause.svg');

		if (popupTimer) {
			clearTimeout(popupTimer);
			popupTimer = null;
		}
	});
});