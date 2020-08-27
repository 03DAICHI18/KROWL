$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.header__gnav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position - 80
    }, speed, "swing");
    return false;
  });
})