$(document).ready(function () {
	let hideTimer;
	let isVisible = false; // 버튼 표시 상태

	const $btnMain = $('.btn-main');
	const $btnGallery = $('.btn-gallery');
	const $slider = $('.painting_slide');

	// 초기 상태: 숨김
	$btnMain.css({
		display: 'flex',
		transform: 'translateX(-150%) translateY(-50%)',
		transition: 'transform 0.5s ease'
	});

	$btnGallery.css({
		display: 'flex',
		transform: 'translateX(150%) translateY(-50%)',
		transition: 'transform 0.5s ease'
	});

	// 버튼 클릭 시 상위로 이벤트 전파 막기
	$('.painting_action_btn').on('click', function (e) {
		e.stopPropagation();
	});

	// 전체 배경 클릭 시 토글
	$('.painting_container').on('click', function () {
		clearTimeout(hideTimer);

		if (isVisible) {
			// 버튼 숨기기
			$btnMain.css('transform', 'translateX(-150%) translateY(-50%)');
			$btnGallery.css('transform', 'translateX(150%) translateY(-50%)');

			setTimeout(() => {
				$btnMain.css('display', 'none');
				$btnGallery.css('display', 'none');

				// 슬라이더 재개 (안정성 확보용)
				$slider.slick('setPosition').slick('slickPlay');
			}, 500);

			isVisible = false;
		} else {
			// 버튼 보이기
			$btnMain.css('display', 'flex');
			$btnGallery.css('display', 'flex');

			setTimeout(() => {
				$btnMain.css('transform', 'translateX(0) translateY(-50%)');
				$btnGallery.css('transform', 'translateX(0) translateY(-50%)');

				// 슬라이더 위치 재설정 및 재생
				$slider.slick('setPosition').slick('slickPlay');
			}, 10);

			isVisible = true;

			// 10초 후 자동 숨김
			hideTimer = setTimeout(() => {
				$btnMain.css('transform', 'translateX(-150%) translateY(-50%)');
				$btnGallery.css('transform', 'translateX(150%) translateY(-50%)');

				setTimeout(() => {
					$btnMain.css('display', 'none');
					$btnGallery.css('display', 'none');

					// 슬라이더 재개
					$slider.slick('setPosition').slick('slickPlay');
				}, 500);

				isVisible = false;
			}, 10000);
		}
	});

	// 슬라이드 설정
	$slider.slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		swipe: true,
		infinite: true,
		fade: true,
	});
});
