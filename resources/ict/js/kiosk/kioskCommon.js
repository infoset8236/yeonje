$(document).ready(function () {
	// 한손 모드 클릭 이벤트
	$('.one_handed_mode').click(function () {
		const content = $('.content');
		const scroll = $('.scroll');
		const image = $(this).find('img');
		const targetTop = $(window).width() > 1080 ? 1920 : 960;
		const scrollHeight = $(window).width() > 1080 ? 1560 : 780;

		const isAtTargetTop = parseInt(content.css('top')) === targetTop;
		content.css({ top: isAtTargetTop ? '0px' : targetTop + 'px' });

		image.css({
			transform: isAtTargetTop ? 'rotate(0deg)' : 'rotate(180deg)',
			transition: 'transform 0.3s ease',
		});

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
	});

	// 네비게이션 아이템 활성화
	const currentPath = window.location.pathname.toLowerCase();

	$('.navigation_item').each(function () {
		var img = $(this).find('img');
		var text = $(this).find('div');
		var imgSrc = img.attr('src');

		if (!imgSrc) return;

		var iconName = imgSrc.split('/').pop().replace('.svg', '').toLowerCase();

		if (currentPath.includes(iconName)) {
			img.css('filter', 'brightness(0) invert(11%)');
			text.css('color', '#121212');
		}
	});
});
