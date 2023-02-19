// 更換顯示店內圖片
let screenWidth = document.body.clientWidth;
if (screenWidth <= 414) {
    //顯示slider圖片區
    document.querySelector('.phone_img').style.display = '';
    // Slider
    var mySwiper = new Swiper ('.swiper', {
        width: undefined,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          bulletClass : 'swiper_dot',
        },
        slidesPerView: "auto",
      })        

} else {
    document.querySelector('.phone_img').style.display = 'none';
};
