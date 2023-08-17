import { getCards } from '../../core/api/cards.api';
import { Card as ICard } from '../../core/interfaces/Card';
import Card from './card.component';

export default async function CardsGrid() {
	const cards = await getCards(30)

	return (
		<div className="container">
			<div className="grid grid-cols-4 gap-4">
				{cards.map((card: ICard) => (
					<Card card={card} key={card.id}></Card>
				))
				}
			</div>
		</div>
	)
}
