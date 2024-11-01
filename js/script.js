$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

$(window).on("load" ,function(){
  $('.message').fadeIn(4000);
});

// -----------
// お問い合わせフォームの設定
// ------------


const button = document.getElementById('check-btn');
button.addEventListener('click', validation);

function validation(event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectBox = document.getElementById("selectBox"); 
    const output = document.getElementById('output');
    let errors = [];

    if (name.trim() === '') {
        errors.push('お名前を入力してください。');
    } else if (name.length > 10) {
        errors.push('お名前が10文字を超えています。');
    }

    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;
    if (!emailPattern.test(email)) {
        errors.push('メールアドレスの入力形式が正しくありません。');
    }

    if(selectBox.options[0].selected === true) {
      errors.push('お問い合わせ内容の選択は必須です');
    };

  selectBox.addEventListener('change', () => {
    if(selectBox.options[0].selected === false) {
      errors.push('お問い合わせ内容の選択は必須です');
    }
  });

    if (errors.length > 0) {
        output.innerHTML = errors.join('<br>');
    } else {
        output.innerHTML = '';
        alert('入力内容を確認しました。');
        // バリデーションがOKならフォームを送信
        document.getElementById('validationForm').submit();
    }

}
