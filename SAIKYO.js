//スライダー（Swiperを使用）
const carouselModule = (() => {
    return {
      configure: () => {
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,  //スライド部分の表示数
            spaceBetween: 0,  //スライド同士の幅
            centeredSlides: true,  //現在のスライドを真ん中に表示
            slidesPerView:1.5,  //左右のスライドを見切れさせる
            speed: 500,  //スライド間の遷移時間
            loop: true,  //先頭に戻る

        //複数枚スライドの何番目かを表示
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',  //ボタンタイプでの表示
                dynamicMainBullets: 6,  //dynamicBulletsの表示数
                clickable: true,
            },

        //ボタン指定
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        //自動再生
            autoplay: {
            delay: 4000,
            disableOnInteraction: true  //操作時に自動再生停止
            },
        })
      }
    }
  })()
  
carouselModule.configure()

//スクロールしてトップへ戻る
$(function() {
    $('.to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
