import { Environment } from '../core/interfaces/Environment';

export function getBaseEnvironment(cardsApi: string): Environment {
	return {
		client: {
		},
		server: {
			card: `${cardsApi}/card/{id}`,
			cards: `${cardsApi}/cards`,
		}
	}
}
