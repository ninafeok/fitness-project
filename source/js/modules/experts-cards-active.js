const isMobile = window.matchMedia('(max-width:1365px)');
const expertCards = document.querySelectorAll('[data-slider="expert-slide"]');

const setCardsActive = () => {
  expertCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
  });
  if (isMobile.matches) {
    for (const card of expertCards) {
      card.addEventListener('click', function () {
        if (this.classList.contains('is-active')) {
          return;
        }
        expertCards.forEach((i) => i.classList.remove('is-active'));

        this.classList.add('is-active');

        document.body.addEventListener('click', function documentClickHandler(event) {
          if (!event.target.closest('[data-slider="expert-slide"]')) {
            card.classList.remove('is-active');
            document.body.removeEventListener('click', window.documentClickHandler);
          }
        });
      });
    }
  }
};

export {setCardsActive};
