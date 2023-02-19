$(document).ready(function () {
  tabCutover1();
});

function tabCutover1() {
  //抓出data-tablink的內容
  let tablink = $(".slide_tab input:checked").data("tablink");

  $("#" + tablink).show().siblings(".price_content").hide();

  //當tab標題li被點到時，
  $(".slide_tab input").click(function () {
    $("#" + $(this).data("tablink")).show().siblings(".price_content").hide();
    $(this).prop("checked", true).siblings("input").prop("checked", false);
  });
}
