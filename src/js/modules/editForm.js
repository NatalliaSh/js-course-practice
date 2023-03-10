function getEditForm() {
  const form = document.createElement('form');
  form.classList.add('edit-form');
  form.setAttribute('id', 'editForm');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Type new name or leave this field empty';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameLabel.appendChild(nameInput);

  const priceLabel = document.createElement('label');
  priceLabel.textContent = 'Type new price or leave this field empty';
  const priceInput = document.createElement('input');
  priceInput.setAttribute('type', 'text');
  priceInput.setAttribute('name', 'price');
  priceLabel.appendChild(priceInput);

  const submit = document.createElement('button');
  submit.textContent = 'Submit';

  form.append(nameLabel, priceLabel, submit);

  return form;
}

export { getEditForm };
