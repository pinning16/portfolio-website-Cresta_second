$(function(){
	
	//スクロールしたらイベント発生
	$(window).on('scroll', function(){
		//スクロールの値が690px高さを超えたらnavにfixedクラスを追加して固定
		if($(window).scrollTop() >390){
            $('.header__container').addClass('fixed');

		}else{
            $('.header__container').removeClass('fixed');

		}
	});	
	//ページを読み込んだらスクロールイベントを実行させる
	$(window).trigger('scroll');

});
