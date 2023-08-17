'use client';

export default function Error({ error, reset } : { error: Error, reset: () => void }) {
	return (
		<div>
			<h1>Something went wrong</h1>
			<span>{ error.message }</span>
			<button onClick={reset}>Reset</button>
		</div>
	)
}
