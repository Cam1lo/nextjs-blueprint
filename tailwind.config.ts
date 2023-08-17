//import type { Config } from 'tailwindcss'
//
//const config: Config = {
//  content: [
//    './pages/**/*.{js,ts,jsx,tsx,mdx}',
//    './shared/**/**/*.{js,ts,jsx,tsx,mdx}',
//    './components/**/*.{js,ts,jsx,tsx,mdx}',
//    './app/**/*.{js,ts,jsx,tsx,mdx}',
//  ],
//	// theme configuration from https://tailwindcss.com/docs/theme
//  theme: {
//    screens: {
//      sm: '480px',
//      md: '768px',
//      lg: '976px',
//      xl: '1440px',
//    },
//    colors: {
//      'blue': '#1fb6ff',
//      'purple': '#7e5bef',
//      'pink': '#ff49db',
//      'orange': '#ff7849',
//      'green': '#13ce66',
//      'yellow': '#ffc82c',
//      'gray-dark': '#273444',
//      'gray': '#8492a6',
//      'gray-light': '#d3dce6',
//
//			//adding my color for example purpose
//			'primary': '#ff0000',
//			'secondary': '#00ff00',
//			'background': '#000000',
//			'text': '#ffffff',
//    },
//    fontFamily: {
//      sans: ['Graphik', 'sans-serif'],
//      serif: ['Merriweather', 'serif'],
//    },
//    extend: {
//      spacing: {
//        '128': '32rem',
//        '144': '36rem',
//      },
//      borderRadius: {
//        '4xl': '2rem',
//      }
//    }
//  },
//  plugins: [],
//}
//export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./shared/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extends: {
			colors: {
				'primary': '#ff0000',
				'secondary': '#00ff00',
				'background': '#000000',
				'text': '#ffffff',
			},
		},
	},
	plugins: [],
}
