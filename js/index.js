//Swiper設定
let mySwiper = new Swiper(".swiper", {
    effect: "fade",
    adeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      bulletElement: "li",
      bulletClass: "banner-dot",
      bulletActiveClass: "dot-active",
    },
  });
  
  
  //AOS 套件初始化
  AOS.init();
  
  //首頁最新消息彈窗
  let btn = document.querySelectorAll('.read_more')[0];
  let popUp = document.getElementsByClassName('pop_up_overlay')[0];
  let popClose = document.getElementsByClassName('svg_close')[0];
  btn.addEventListener('click', function () { 
      if (popUp.style.display=='none') { 
          popUp.style.display = '';
      } 
  });
  popClose.addEventListener('click', function () {
      if (popUp.style.display!='none') { 
          popUp.style.display = 'none';
      } 
  });