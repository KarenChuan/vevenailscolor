//---------- Isotope filter Menu ----------//
$('.pics_area').imagesLoaded(function () {
  // init Isotope
  var $grid = $(".pics_area").isotope({
    itemSelector: "li",
    masonry: {
      columnWidth: 355,
      horizontalOrder: true,
    },
  });
  // bind filter button click
  $("#filter_btn").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });
});
// change is-checked class on buttons
$("#filter_btn").each(function (i, filterBtn) {
  let $filterBtn = $(filterBtn);
  $filterBtn.on("click", "li", function () {
    $filterBtn.find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//------------ Collect favorite ----------------//
const heart = document.getElementsByClassName("fa-heart");
const span = document.getElementsByClassName("count");
for (let i = 0; i < heart.length; i++) {
  let count;//計數器
  (function (i) {
    // 點選最愛
    let flag = true;
    heart[i].onclick = function () {
      if (flag) {
        flag = false;
        // 最愛點選後變紅
        this.className = "fa-solid fa-heart active";
        ++span[i].innerHTML;  //在最愛+1
      } else { //取消最愛
        flag = true;
        this.className = "fa-solid fa-heart";
        --span[i].innerHTML; //取消最愛-1
      }
    }
  })(i);
}

