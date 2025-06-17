$(document).ready(function() {
	$('.tab div').click(function() {
		// 탭 활성화 변경
		$('.tab div').removeClass('active');
		$(this).addClass('active');

		// 인덱스로 콘텐츠 매칭
		const index = $(this).index();

		// 콘텐츠 전환
		$('.box > div.tab1, .box > div.tab2').hide(); // 모든 탭 콘텐츠 숨기기
		$('.box > div.tab' + (index + 1)).fadeIn(300); // 해당 탭 콘텐츠 보여주기
	});

	// 초기 상태: 첫 번째 탭만 보이기
	$('.box > div.tab1, .box > div.tab2').hide();
	$('.box > div.tab1').show();
});
