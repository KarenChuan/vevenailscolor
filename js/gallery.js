//Isotope filter Menu
// init Isotope
var $grid = $(".pics_area").isotope({
  itemSelector: "li",
  layoutMode: "fitRows",
  // transitionDuration: 400,
  // stagger: '0.1s',
});

// bind filter button click
$("#filter_btn").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({
    // filter: function () {
    //   if (filterValue !== "*") {
    //     console.log('5555');
    //     filterValue = "." + filterValue;
    //   }
    //   return filterValue;
    // }
    filter: "." + filterValue,
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

// infinitePlug
//   let elem = document.querySelector('.pics_area');
//   let infScroll = new InfiniteScroll(elem, {
//     // options
//     //path: '.pagination__next',
//     append: 'li',
//     history: false,
//   });
