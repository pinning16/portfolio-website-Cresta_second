// 間違える送信を防ぐ、submitをdisabledで制御
$(document).ready(function () {
    const $submitBtn = $('#js-submit')
    $('#js-form input').on('change', function () {
      if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="phone"]').val() !== "" &&
        $('#js-form input[type="email"]').val()
        // $('#js-form textarea').val()
      ) {
        $submitBtn.prop('disabled', false);

      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  });
