$(".h-open").click(function () {
  $(this).toggleClass("active");
  $("#h-nav").toggleClass("panelactive");
  $(this).toggleClass("move-left"); // ← ボタンも左へ移動！
});

$("#h-nav a").click(function () {
  $(".h-open").removeClass("active move-left"); // ← 追加
  $("#h-nav").removeClass("panelactive");
});
