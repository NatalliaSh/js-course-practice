import { getElement } from './getElement.js';

function getCard({ name, imgPath, price, description, count }) {
  const cardContainer = getElement('div', 'card_container');

  const imgContainer = getElement('div', 'card_img_container');
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getElement('img', '', '', 'src', imgPath));

  const goodDescriptionContainer = getElement(
    'div',
    'good_description_container',
  );
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getElement('div', 'good_name_container');
  goodDescriptionContainer.appendChild(goodNameContainer);
  goodNameContainer.appendChild(getElement('p', '', name));
  goodDescriptionContainer.appendChild(
    getElement('div', 'good_description', description),
  );

  const orderContainer = getElement('div', 'order_container');
  goodDescriptionContainer.appendChild(orderContainer);

  orderContainer.appendChild(getElement('p', '', price));
  orderContainer.appendChild(
    getElement('button', '', 'Хочу!', 'type', 'button'),
  );

  return cardContainer;
}

export { getCard };

/* const cardContainer = document.createElement('div');
  cardContainer.classList.add('card_container');
  
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card_img_container');
  const img = document.createElement('img');
  img.src = imgPath;
  imgContainer.appendChild(img);
  cardContainer.appendChild(imgContainer);

  const goodDescriptionContainer = document.createElement('div');
  goodDescriptionContainer.classList.add('good_description_container');
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = document.createElement('div');
  goodNameContainer.classList.add('good_name_container');
  goodDescriptionContainer.appendChild(goodNameContainer);

  const goodName = document.createElement('p');
  goodName.innerText = name;
  goodNameContainer.appendChild(goodName);

  const goodDescription = document.createElement('div');
  goodDescription.classList.add('good_description');
  goodDescription.innerText = description;
  goodDescriptionContainer.appendChild(goodDescription);

  const orderContainer = document.createElement('div');
  orderContainer.classList.add('order_container');
  goodDescriptionContainer.appendChild(orderContainer);

  const goodPrice = document.createElement('p');
  goodPrice.innerText = price;
  orderContainer.appendChild(goodPrice);

  const wantButton = document.createElement('button');
  wantButton.innerText = 'Хочу!';
  wantButton.type = 'button';
  orderContainer.appendChild(wantButton);*/
