$(function () {
  // hover制御
  // ヘッダーgnav
  var userAgent = navigator.userAgent; // ユーザーエージェント判定
  var list = $('.header__list');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    list.on("touchstart", function () {
      $(this).addClass("hover");
    });
    list.on("touchend", function () {
      $(this).removeClass("hover");
    });
  } else {
    list.hover(
      function () {
        $(this).addClass("hover");
      },
      function () {
        $(this).removeClass("hover");
      }
    );
  }

  // ハンバーガーメニュー
  var userAgent = navigator.userAgent; // ユーザーエージェント判定
  var list = $('.m-btn');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    list.on("touchstart", function () {
      $(this).addClass("hover");
    });
    list.on("touchend", function () {
      $(this).removeClass("hover");
    });
  } else {
    list.hover(
      function () {
        $(this).addClass("hover");
      },
      function () {
        $(this).removeClass("hover");
      }
    );
  }
});