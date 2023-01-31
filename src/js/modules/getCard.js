import { getElement } from './getElement.js';

function getCard({
  name,
  imgPath,
  price,
  currency = 'COM',
  description,
  count,
}) {
  const cardContainer = getElement('div', { className: 'card_container' });
  const imgContainer = getElement('div', { className: 'card_img_container' });
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getElement('img', { src: imgPath }));

  const goodDescriptionContainer = getElement('div', {
    className: 'good_description_container',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getElement('div', {
    className: 'good_name_container',
  });
  goodDescriptionContainer.appendChild(goodNameContainer);
  goodNameContainer.appendChild(getElement('p', { innerText: name }));
  goodDescriptionContainer.appendChild(
    getElement('div', {
      className: 'good_description',
      innerText: description,
    }),
  );

  const orderContainer = getElement('div', { className: 'order_container' });
  goodDescriptionContainer.appendChild(orderContainer);

  orderContainer.appendChild(
    getElement('p', { innerText: `${price} ${currency}` }),
  );
  orderContainer.appendChild(
    getElement('button', { innerText: 'Хочу!', type: 'button' }),
  );

  return cardContainer;
}

export { getCard };
