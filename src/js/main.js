import { request } from './modules/request.js';
import { getCard } from './modules/card.js';
import { getEditForm } from './modules/editForm.js';

let items = [];
const container = document.querySelector('.container__items');

container.addEventListener('click', ({ target }) => {
  const {
    id: action,
    dataset: { id },
  } = target;

  if (action === 'delete') {
    request(`objects/${id}`, 'DELETE').then((res) => {
      if (!(res instanceof Error)) {
        target.parentElement.parentElement.remove();
        items = items.filter((item) => item.id !== id); //delete from array items
        console.log(res);
      } else {
        console.log(
          res + ". Probably you don't have rights to delete this item",
        );
      }
    });
  }

  if (action === 'edit') {
    container.appendChild(getEditForm());
    const form = document.querySelector('#editForm');
    form.hidden = false;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const indexOfEditElement = items.findIndex((el) => el.id === id);
      const name =
        e.target.elements.name.value || items[indexOfEditElement].name;
      const price =
        e.target.elements.price.value || items[indexOfEditElement].data.price;

      request(`objects/${id}`, 'PATCH', {
        name,
        data: { price },
      }).then((res) => {
        form.hidden = true;
        if (!(res instanceof Error)) {
          console.log(res);
          items[indexOfEditElement].name = name;
          items[indexOfEditElement].data.price = price;
          renderItems(items);
        } else {
          console.log(
            res + ". Probably you don't have rights to edite this item",
          );
        }
      });
    });
  }
});

const renderItems = (items) => {
  const elements = items.map(({ name, data, id }) => {
    let price;

    if (data && (data.Price || data.price)) {
      price = data.Price || data.price;
    }
    return getCard(name, price, id);
  });
  container.replaceChildren(...elements);
};

request('objects').then((data) => {
  items = data;
  renderItems(items);
});

const form = document.querySelector('#addItem');

function onSubmit(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const price = e.target.elements.price.value;
  request('objects', 'POST', {
    name,
    data: { price },
  }).then((item) => {
    console.log(item);
    e.target.elements.name.value = '';
    e.target.elements.price.value = '';
    items.push(item);
    renderItems(items);
  });

  console.log(name, price);
}

form.addEventListener('submit', onSubmit);
