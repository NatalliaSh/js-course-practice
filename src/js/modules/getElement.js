function getElement(
  tag,
  className,
  innerText,
  nameOfAtribute,
  valueOfAtribute,
) {
  const el = document.createElement(tag);
  if (className) {
    el.classList.add(className);
  }
  el.innerText = innerText || '';
  if (nameOfAtribute && valueOfAtribute) {
    el[nameOfAtribute] = valueOfAtribute;
  }

  return el;
}

export { getElement };
