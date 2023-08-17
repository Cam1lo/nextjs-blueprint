import axios from 'axios';
import { environment } from '../../environment/environment';
import { Card } from '../interfaces/Card';

let cards: Card[] =[];

export const getCards = async (limitTo: number = 20) => {
	const { data } = await axios.get(environment.server.cards);
	const response = data.filter((card: Card) => card.image);
	cards = response;

	return response.slice(0, limitTo);
}

export const getCardByName = async (name: string) => {
	if (!cards.length) {
		await getCards();
	}

	const response = cards.find((card: Card) => card.name === name);

	return response;
}

export const getCardById = async (id: string) => {
	if (!cards.length) {
		await getCards();
	}

	const response = cards.find((card: Card) => card.id === id);

	return response;
}
