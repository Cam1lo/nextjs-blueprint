import { getCardById } from "@/core/api/cards.api"
import { CardNotFoundError } from "@/core/exceptions"
import Card from "@/shared/components/card.component"

export default async function Page({params}: {params: { id: string }}) {
	const card = await getCardById(params.id)
	if (!card) throw new CardNotFoundError()

	return (
		<Card card={card}/>
	)
}
