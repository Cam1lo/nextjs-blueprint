import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { METADATA } from '../core/constants/metadata.const'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = METADATA
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + ' m-4 px-2'}>
				<div className='mb-4 py-4'>
					<h1 className='font-extrabold text-4xl'>Welcome to the example post app</h1>
					<span>Application header from layout</span>
				</div>
				{children}
			</body>
		</html>
	)
}
