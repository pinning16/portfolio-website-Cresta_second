// ajax実装で、画面に遷移しない
$(document).ready(function () {
    $('#js-form').submit(function (event) {
      var formData = $('#js-form').serialize();
      $.ajax({
        //   action url入力
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSetjOFmjqjauuU6Ai4-NidLOpuQKX26BV3Z2hfofKP1sLT7eA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            //   お問い合わせ完了メッセージ表示
            $(".contact__end-message").slideDown();
            // ボタン表示しない
            $("#js-submit").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            //   送信失敗メッセージ表示
            $(".contact__false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });
