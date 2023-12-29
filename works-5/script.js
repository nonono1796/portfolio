
$(document).ready(function() {
    // ページをスクロールしたときの処理を設定
    $(window).scroll(function() {
      // ページをスクロールした位置を取得
      var scrollPosition = $(this).scrollTop();
      
      // フェードアウトさせたい要素を取得
      var $elementToFadeOut = $("#scroll");

      // スクロールした位置が特定の値を超えたら要素をフェードアウト
      if (scrollPosition > 100) { // ページ上部から100pxスクロールしたらフェードアウト
        $elementToFadeOut.fadeOut();
      } else {
        $elementToFadeOut.fadeIn();
      }
    });
  });

