"use client";
import { useState } from 'react'

export default function SearchCard({submitCallback}: {submitCallback: (name: string) => void}) {
	const [formState, setFormState] = useState({
		name: '',
	})

	const handleSubmit = (event: any) => {
		event.preventDefault()
		submitCallback(formState.name)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col mb-8">
				<label htmlFor="name">Name</label>
				<input className='w-96 bg-black border border-indigo-500' type="text" name="name" id="name" value={formState.name} onChange={(e) => {
					setFormState({
						...formState,
						name: e.target.value,
					})
				}} />
			</div>
			<button className='bg-indigo-500 py-2 px-8 mb-24 rounded' type="submit">Submit</button>
		</form>
	)
}
