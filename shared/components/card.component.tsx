import { Card } from '../../core/interfaces/Card';

export default function Card(
	{ card }: { card: Card }
) {
	return (
		<div className="card">
			<h3 className="text-lg font-bold">{card.name}</h3>
			<img src={card.image + '/low.webp'} alt={card.name} />
		</div>
	)
}
