
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

//---------------  masonry ---------------//
// init Isotope

let $imgs = $('.pics_area').isotope({
  masonry: {
    columnWidth: '.grid__col-sizer',
    gutter: '.grid__gutter-sizer',
  },
  itemSelector: 'li', // select none at first
  percentPosition: true,
  stagger: 30,
  // nicer reveal transition
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

// get Masonry instance
let msnry = $imgs.data('masonry');
// initial items reveal
$imgs.imagesLoaded(function () {
  $imgs.removeClass('are-images-unloaded');
  $imgs.isotope('option', { itemSelector: '.grid__item' });
  var $items = $grid.find('.grid__item');
  $imgs.isotope('appended', $items);
});

//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
  '202252c2f5f192688dada252913ccf13',
  'a308f05af22690139e9a2bc655bfe3ee',
  '6c9ff23039157ee37b3ab982245eef28',
];

function getPenPath() {
  var slug = nextPenSlugs[this.loadCount];
  if (slug) {
    return '/desandro/debug/' + slug;
  }
}

//-------------------------------------//
// init Infinte Scroll

// get Isotope instance
var iso = $imgs.data('isotope');

$imgs.infiniteScroll({
  path: getPenPath,
  append: 'li',
  outlayer: iso,
  status: '.page-load-status',
});
