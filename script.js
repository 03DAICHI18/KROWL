$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.header__gnav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
})