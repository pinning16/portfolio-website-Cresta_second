const carouselModule = (() => {
     return {
       configure: () => {
         const mySwiper = new Swiper('.swiper-container', {
           // ここからはオプションを記述していきます
           loop: true,
           slidesPerView: 1,
          //  spaceBetween: 10,//  追加...スライド間の余白
           speed: 2500,//  スクロールのスピード
           centeredSlides: true,
           autoplay: {
             delay: 2000,//　スライドのスピード
           },
      //   ページネーションとナビゲーションを表示
     //    pagination: {
     //      el: '.swiper-pagination',
     //    },
     //    navigation: {
     //      nextEl: '.swiper-button-next',
     //      prevEl: '.swiper-button-prev',
     //    },
        // ここまでを追加

// 画面幅に応じてスライド数を変え
         // ブレイクポイントを設定（1023px以下の時に適用されるオプション）
         breakpoints: {
          990: {
               slidesPerView: 1,
               spaceBetween: 0,
              //  centeredSlides: true,
               autoplay: {
                    delay: 2000,
                  },
          }
        }
        // ここまで追加
         })
       }
     }
   })()
   
   carouselModule.configure()