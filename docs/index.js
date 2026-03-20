function appScroller() {
  const main = document.querySelector('.app-main');
  let lastY = -100;

  function setBodyHeight() {
    document.body.style.height = main.offsetHeight + 'px';
  }

  function tick() {
    if (lastY !== window.pageYOffset) {
      lastY = window.pageYOffset;
      const transform = `translate3d(0px, -${lastY}px, 0px)`;
      main.style.transform = transform;
    }
    requestAnimationFrame(tick);
  }

  setBodyHeight();
  window.addEventListener('resize', setBodyHeight);
  tick();
}

window.addEventListener('load', function () {
  document.body.classList.remove('is-loading');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('is-mobile');
  } else {
    appScroller();
  }
});
