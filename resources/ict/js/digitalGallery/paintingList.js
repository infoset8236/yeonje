$(document).ready(function() {
	$('.tab div').click(function() {
		// 탭 활성화 변경
		$('.tab div').removeClass('active');
		$(this).addClass('active');

		// 인덱스로 콘텐츠 매칭
		const index = $(this).index();

		// 콘텐츠 전환
		$('.scroll_area').hide();
		$('.scroll_area').eq(index).fadeIn(300); // 부드럽게 보여주기
	});

	// 초기 상태: 국내작가 탭만 보이기
	$('.scroll_area').hide();
	$('.scroll_area.domestic').show();
});