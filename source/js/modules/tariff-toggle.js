let btnIndex = 0;
const controlBtns = document.querySelectorAll('[data-price="control"]');
const shownPrice = document.querySelectorAll('[data-price="value"]');
const priceShadows = document.querySelectorAll('[data-price="shadow"]');
const tariff = document.querySelectorAll('[data-price="tariff-plan"]');
const prices = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

controlBtns.forEach((button, i) => {
  button.addEventListener('click', () => {
    btnIndex = i;
    changePeriod(btnIndex);
  });
});

function changePeriod() {
  controlBtns[0].classList.add('is-active');

  shownPrice.forEach((price, index) => {
    price.textContent = prices[btnIndex][index];
    price.insertAdjacentHTML('beforeend', '<span class="tariff-plan__currency">&#8381;</span>');

    if (index === btnIndex) {
      controlBtns[index].classList.add('is-active');
    } else {
      controlBtns[index].classList.remove('is-active');
    }
  });

  priceShadows.forEach((price, index) => {
    price.textContent = prices[btnIndex][index];
  });
}

const changeTariff = () => {
  tariff[1].classList.add('is-active');
  for (const card of tariff) {
    card.addEventListener('click', function () {
      if (this.classList.contains('is-active')) {
        return;
      }
      tariff.forEach((i) => i.classList.remove('is-active'));

      this.classList.add('is-active');
    });
  }
};

export {changePeriod, changeTariff};
