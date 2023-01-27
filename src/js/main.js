import { getCard } from './modules/getCard.js';
import { cardArr } from './modules/CONST.js';

cardArr.forEach((element) => document.body.appendChild(getCard(element)));
