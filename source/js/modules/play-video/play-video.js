const playerWrapper = document.querySelector('[data-video="container"]');
const playBtn = document.querySelector('[data-video="play-button"]');
const poster = playerWrapper.querySelector('[data-video="container"] img');

const startVideo = () => {
  playBtn.addEventListener('click', () => {
    const iframe = createIframe();
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    playerWrapper.append(iframe);
  });
};

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; encrypted-media; allowfullscreen');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw/?rel=0&showinfo=0&autoplay=1&amp;controls=0');
  iframe.style.cssText = 'position: relative; z-index: 10';

  return iframe;
}

export {startVideo};
