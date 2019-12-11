document.addEventListener(
  "DOMContentLoaded", e => {
    if (document.getElementById("token_submit") != null ){
      Payjp.setPublicKey("pk_test_b2656939973fa0eadf6a4000");
      let btn = document.getElementById("token_submit");
      btn.addEventListener("click", e => {
        e.preventDefault();
        let card = {
          number: document.getElementById("card_payment_card_no").value,
          cvc: document.getElementById("card_payment_card_security_code").value,
          exp_month: document.getElementById("card_expiration_date_2i").value,
          exp_year: 20 + document.getElementById("card_expiration_date_1i").value
        };
        // console.log(card);
        Payjp.createToken(card, function(status, response){
          // console.log(status)
          // console.log(response);
          if (status === 200){
            $("#card_payment_card_no").removeAttr("name");
            $("#card_payment_card_security_code").removeAttr("name");
            $("#card_expiration_date_2i").removeAttr("name");
            $("#card_expiration_date_1i").removeAttr("name");
            $("#card_token").append(
              $('<input type="hidden" name="payjp-token">').val(response.id)
            );
            document.inputForm.submit();
            alert("登録が完了しました");
          } else {
            alert("カード情報が正しくありません。");
          }
        });
      });
    }
  },
  false
);