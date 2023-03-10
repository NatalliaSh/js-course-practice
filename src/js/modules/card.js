function getCard(name, price, id) {
  const card = document.createElement('div');
  card.classList.add('container__row');
  card.innerHTML = `<div class="container__column">${name}</div>
  <div class="container__column">${price || 'Empty'}</div>
  <div class="container__column">
      <button id='edit' data-id='${id}'>Edit</button>
      <button id='delete' data-id='${id}'>Delete</button>
  </div>`;

  return card;
}

export { getCard };
