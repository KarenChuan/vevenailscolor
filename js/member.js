$(document).ready(function () {
    tabCutover2();
  });
  
  function tabCutover2() {
    //抓出data-tablink的內容
    let tablink = $(".slide_tab input:checked").data("tablink");
  
    $("#" + tablink).show().siblings(".form").hide();
  
    //當tab標題li被點到時，
    $(".slide_tab input").click(function () {
      $("#" + $(this).data("tablink")).show().siblings(".form").hide();
      $(this).prop("checked", true).siblings("input").prop("checked", false);
    });
  }