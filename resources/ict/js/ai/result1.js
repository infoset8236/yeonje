$(document).ready(function () {
	// 추천이유 더보기/줄이기 클릭 이벤트
	$('.more_btn').click(function () {
		const reasonBox = $('.reason_box');
		const buttonText = $(this).find('div');
		const arrowImg = $(this).find('img');

		// 현재 상태 확인: 말줄임 처리 여부
		const isEllipsis = reasonBox.css('white-space') === 'nowrap';

		if (isEllipsis) {
			// 말줄임 해제: 전체 텍스트 표시
			reasonBox.css({
				'white-space': 'normal',
				'text-overflow': 'initial',
				overflow: 'visible',
			});
			// 버튼 텍스트와 화살표 방향 변경
			buttonText.text('추천이유 줄이기');
			arrowImg.css('transform', 'rotate(180deg)');
		} else {
			// 말줄임 복원
			reasonBox.css({
				'white-space': 'nowrap',
				'text-overflow': 'ellipsis',
				overflow: 'hidden',
			});
			// 버튼 텍스트와 화살표 방향 복원
			buttonText.text('추천이유 더보기');
			arrowImg.css('transform', 'rotate(0deg)');
		}
	});
});
