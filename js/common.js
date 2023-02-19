document.addEventListener("DOMContentLoaded", function () {

    let screenWidth = document.body.clientWidth;
    let hamburger = document.querySelector('input.trigger');
    let menu = document.querySelector('ul.menu');

    function toggleHamburger() {
        if (hamburger.checked) {
            menu.style.display = '';
        } else {
            menu.style.display = 'none';
        }
    }

    if (screenWidth <= 414) {
        menu.style.display = 'none';
        window.addEventListener('click', function () {
            toggleHamburger();
        });
    } else {
        menu.style.display = '';
        // nav scroll
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementsByTagName('nav')[0].style.top = "0";
            } else {
                document.getElementsByTagName("nav")[0].style.top = "-100px";
            };
            prevScrollpos = currentScrollPos;
        };
    };

});





