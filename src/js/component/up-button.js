var btn = document.querySelector('.up-button');

  window.onscroll = magic;

  function magic() {
      if (window.pageYOffset > 20) {
      btn.style.opacity = '1';
    } else { btn.style.opacity = '0'; }
}

btn.onclick = function () {
    $('html').animate({
                scrollTop: 0
            }, 700);
};