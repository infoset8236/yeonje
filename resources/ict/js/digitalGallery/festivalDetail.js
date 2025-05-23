$(document).ready(function () {
	const $slider = $('.festival_slide');
	const $playPauseBtn = $('.play-and-pause img');
	const $overlay = $('.overlay');
	const $popup = $('.popup');
	const $popupNoBtn = $('.popup .no');
	let isPlaying = true;
	let popupTimer = null;

	// 슬릭 슬라이드 초기화
	$slider.slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		swipe: true,
		infinite: true,
		centerMode: true,
		variableWidth: true
	});

	// 이전/다음 버튼
	$('.slide_prev, .slide_next').click(function () {
		if ($('.festival_slide').hasClass('slick-initialized')) {
			$('.festival_slide').slick($(this).hasClass('slide_prev') ? 'slickPrev' : 'slickNext');
		}
	});

	// 스크롤 진행바
	$('.scroll_area').on('scroll', function () {
		var scrollLeft = $(this).scrollLeft();
		var scrollWidth = this.scrollWidth;
		var clientWidth = $(this).innerWidth();
		var scrolledPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;

		$('.progress_bar .bar').css('width', scrolledPercent + '%');
	});

	// 이미지 선택 시 보더 처리
	$('.scroll_area img').click(function () {
		$('.scroll_area img').removeClass('selected');
		$(this).addClass('selected');
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

	// 마지막 슬라이드 처리
	$slider.on('afterChange', function (event, slick, currentSlide) {
		var totalSlides = slick.slideCount;

		// 기존 타이머 정리
		if (popupTimer) {
			clearTimeout(popupTimer);
			popupTimer = null;
		}

		// 마지막 슬라이드일 때
		if (currentSlide === totalSlides - 1) {
			$slider.slick('slickPause'); // 슬라이드 일시정지
			isPlaying = false;
			$playPauseBtn.attr('src', '/resources/ict/img/digitalGallery/play.svg'); // 아이콘을 재생으로 변경

			// 5초 후 팝업 표시
			popupTimer = setTimeout(function () {
				$overlay.css('display', 'block'); // 오버레이 표시
				$popup.css('display', 'flex'); // 팝업 표시
			}, 5000);
		}
	});

	// 팝업 "아니요" 버튼 클릭 처리
	$popupNoBtn.click(function () {
		$overlay.css('display', 'none'); // 오버레이 숨김
		$popup.css('display', 'none'); // 팝업 숨김
		$slider.slick('slickGoTo', 0); // 첫 슬라이드로 이동
		$slider.slick('slickPlay'); // 슬라이드 재생
		isPlaying = true;
		$playPauseBtn.attr('src', '/resources/ict/img/digitalGallery/pause.svg'); // 아이콘을 일시정지로 변경

		// 타이머 정리
		if (popupTimer) {
			clearTimeout(popupTimer);
			popupTimer = null;
		}
	});
});