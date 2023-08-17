import { getBaseEnvironment } from './base';

const cardsApi = 'https://api.tcgdex.net/v2/en';
export const environment = getBaseEnvironment(cardsApi);

