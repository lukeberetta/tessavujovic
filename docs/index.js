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

function typewriterIntro() {
  const h2 = document.querySelector('.main-intro h2');
  if (!h2) return;

  // Token types: text, br, italic, backspace, pause
  const tokens = [
    { type: 'pause', duration: 2000 },
    { type: 'text', content: 'Hi' },
    { type: 'pause', duration: 320 },
    { type: 'backspace' },
    { type: 'backspace' },
    { type: 'pause', duration: 180 },
    { type: 'text', content: 'Hello, ' },
    { type: 'pause', duration: 580 },
    { type: 'br' },
    { type: 'text', content: "I'm Tessa Vujov" },
    { type: 'italic', content: 'i' },
    { type: 'text', content: 'ć. ' },
    { type: 'br' },
    { type: 'text', content: 'Product des' },
    { type: 'italic', content: 'i' },
    { type: 'text', content: 'gner based ' },
    { type: 'italic', content: 'i' },
    { type: 'text', content: 'n Cape Town and Europe.' },
  ];

  const steps = [];
  for (const token of tokens) {
    if (token.type === 'text') {
      for (const char of token.content) {
        steps.push({ type: 'char', char });
      }
    } else if (token.type === 'italic') {
      steps.push({ type: 'italic', char: token.content });
    } else {
      steps.push(token);
    }
  }

  h2.innerHTML = '';
  h2.classList.add('is-typing');

  let stepIndex = 0;
  let currentTextNode = null;

  function jitter() {
    return Math.floor(38 + Math.random() * 18);
  }

  function revealPage() {
    document.querySelectorAll('.fadein-2').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  function typeNext() {
    if (stepIndex >= steps.length) {
      h2.classList.remove('is-typing');
      revealPage();
      return;
    }

    const step = steps[stepIndex++];
    let delay = jitter();

    if (step.type === 'char') {
      if (currentTextNode === null) {
        currentTextNode = document.createTextNode(step.char);
        h2.appendChild(currentTextNode);
      } else {
        currentTextNode.textContent += step.char;
      }
      if (step.char === '.' || step.char === ',') delay = 160 + Math.floor(Math.random() * 60);
    } else if (step.type === 'br') {
      h2.appendChild(document.createElement('br'));
      currentTextNode = null;
      delay = 120;
    } else if (step.type === 'italic') {
      const el = document.createElement('i');
      el.textContent = step.char;
      h2.appendChild(el);
      currentTextNode = null;
    } else if (step.type === 'backspace') {
      if (currentTextNode && currentTextNode.textContent.length > 0) {
        currentTextNode.textContent = currentTextNode.textContent.slice(0, -1);
        if (currentTextNode.textContent.length === 0) {
          currentTextNode.remove();
          currentTextNode = null;
        }
      } else {
        const last = h2.lastChild;
        if (last) h2.removeChild(last);
      }
      delay = 90;
    } else if (step.type === 'pause') {
      delay = step.duration;
    }

    setTimeout(typeNext, delay);
  }

  setTimeout(typeNext, 100);
}

function themeToggle() {
  const button = document.querySelector('.theme-toggle');
  const body = document.body;

  button.addEventListener('click', function () {
    if (body.classList.contains('is-white')) {
      body.classList.replace('is-white', 'is-black');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace('is-black', 'is-white');
      localStorage.setItem('theme', 'light');
    }
  });
}

window.addEventListener('load', function () {
  document.body.classList.remove('is-loading');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('is-mobile');
  } else {
    appScroller();
  }
  themeToggle();
  typewriterIntro();
});
