"use client";
import CardsGrid from '../shared/components/cards-grid.component';
import SearchCard from '../shared/forms/search-card.form';
import { getCardByName } from '../core/api/cards.api';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	async function submitCallback(name: string) {
		const response = await getCardByName(name);
		router.push(`/${response?.id}`);
	}

	return (
		<div>
			<SearchCard submitCallback={submitCallback} />
			<CardsGrid></CardsGrid>
		</div>
	)
}

