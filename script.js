$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.header__gnav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

  // hover制御
  var userAgent = navigator.userAgent; // ユーザーエージェント判定
  var list = $('.header__list , .header__list.open');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    list.on("touchstart", function () {
      $(this).addClass("list-hover");
    });
    list.on("touchend", function () {
      $(this).removeClass("list-hover");
    });
  } else {
    list.hover(
      function () {
        $(this).addClass("list-hover");
      },
      function () {
        $(this).removeClass("list-hover");
      }
    );
  }
})