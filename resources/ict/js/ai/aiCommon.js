$(document).ready(function () {
	// 한손 모드 클릭 이벤트
	$('.one_handed_mode').click(function () {
		const content = $('.content');
		const scroll = $('.scroll');
		const targetTop = $(window).width() > 1080 ? 1920 : 960;
		const scrollHeight = $(window).width() > 1080 ? 1930 : 965;

		const isAtTargetTop = parseInt(content.css('top')) === targetTop;
		content.css({ top: isAtTargetTop ? '0px' : targetTop + 'px' });

		if (!isAtTargetTop) {
			scroll.css({
				'overflow-y': 'scroll',
				height: scrollHeight + 'px',
			});
		} else {
			scroll.css({
				'overflow-y': '',
				height: '100%',
			});
		}

		if (scrollHeight === 1560 || 780) {
			$('.full_mode').css('display', 'flex');
		} else {
			$('.full_mode').css('display', 'none');
		}
	});

	// 전체 모드 클릭 이벤트
	$('.full_mode').click(function () {
		const content = $('.content');
		const scroll = $('.scroll');

		content.css({ top: '0px' });
		scroll.css({
			'overflow-y': '',
			height: '100%',
		});

		$('.full_mode').css('display', 'none');
	});

	// input 요소와 send_icon 요소 선택
	const $input = $('.ai_input_wrapper input');
	const $sendIcon = $('.send_icon');

	// 상태 업데이트 함수
	function updateSendIcon() {
		const hasFocus = $input.is(':focus');
		const hasValue = $input.val().trim().length > 0;

		// 포커스가 있거나 입력값이 있으면 send_active.svg, 없으면 send.svg
		if (hasFocus || hasValue) {
			$sendIcon.attr('src', '/resources/ict/img/ai/send_active.svg');
		} else {
			$sendIcon.attr('src', '/resources/ict/img/ai/send.svg');
		}
	}

	// 이벤트 핸들러 등록
	$input.on('focus', updateSendIcon);
	$input.on('blur', updateSendIcon);
	$input.on('input', updateSendIcon);

	// 초기 상태 설정
	updateSendIcon();
});
