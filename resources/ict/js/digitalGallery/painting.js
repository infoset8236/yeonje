$(document).ready(function () {
	let hideTimer;

	// 초기 위치는 왼쪽 밖에 숨김
	$('.painting_action_btn').css({
		display: 'flex',
		transform: 'translateX(-150%)',
		transition: 'transform 0.5s ease'
	});

	$('.painting_container').on('click', function () {
		const $btn = $('.painting_action_btn');
		const isVisible = $btn.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)';

		clearTimeout(hideTimer);

		if (isVisible) {
			// 버튼이 보이는 중이면 숨기기
			$btn.css('transform', 'translateX(-150%)');
			setTimeout(() => {
				$btn.css('display', 'none');
			}, 500);
		} else {
			// 버튼이 숨겨진 상태면 보이기
			$btn.css('display', 'flex');
			setTimeout(() => {
				$btn.css('transform', 'translateX(0)');
			}, 10); // transition 작동을 위한 약간의 지연

			// 10초 후 자동으로 숨기기
			hideTimer = setTimeout(function () {
				$btn.css('transform', 'translateX(-150%)');
				setTimeout(() => {
					$btn.css('display', 'none');
				}, 500);
			}, 10000);
		}
	});
});
