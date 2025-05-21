$(document).ready(function () {
	let isScrolling = true;
	let scrollInterval;
	const $list = $('.list');
	const $controlBtn = $('.scroll-control img');
	const scrollSpeed = 50;

	// 자동 스크롤 시작 함수
	function startScroll() {
		scrollInterval = setInterval(function () {
			$list.scrollTop($list.scrollTop() + 1);
			if ($list.scrollTop() >= $list[0].scrollHeight - $list.height()) {
				clearInterval(scrollInterval);
				isScrolling = false;
				$controlBtn.attr('src', '/resources/ict/img/digitalGallery/play.svg');
				// 3초 뒤 팝업 표시
				setTimeout(function () {
					$('.overlay').css('display', 'block');
					$('.popup').css('display', 'flex');
				}, 3000);
			}
		}, 1000 / scrollSpeed);
	}

	// 초기화: 버튼 이미지 동기화 및 스크롤 시작
	$controlBtn.attr('src', '/resources/ict/img/digitalGallery/pause.svg');
	startScroll();

	// 버튼 클릭 시 스크롤 제어 및 이미지 토글
	$('.scroll-control').on('click', function (e) {
		e.preventDefault();
		if (isScrolling) {
			clearInterval(scrollInterval);
			$controlBtn.attr('src', '/resources/ict/img/digitalGallery/play.svg');
			isScrolling = false;
		} else {
			startScroll();
			$controlBtn.attr('src', '/resources/ict/img/digitalGallery/pause.svg');
			isScrolling = true;
		}
	});

	// 터치 시 스크롤 정지
	$list.on('touchstart', function () {
		if (isScrolling) {
			clearInterval(scrollInterval);
			$controlBtn.attr('src', '/resources/ict/img/digitalGallery/play.svg');
			isScrolling = false;
		}
	});

	// "아니요" 버튼 클릭 시 팝업 닫기
	$('.popup_action .no').on('click', function (e) {
		e.preventDefault();
		$('.overlay, .popup').css('display', 'none');
	});
});