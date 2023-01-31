import { getCard } from './modules/getCard.js';
import { cardArr } from './modules/CONST.js';

const cards = cardArr.map((element) => getCard(element));
document.body.append(...cards);
