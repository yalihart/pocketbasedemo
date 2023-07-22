import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			spacing: {
				'20%': '20%',
				'30%': '30%',
			},
			animation: {
				text: 'text 5s ease infinite',
			  },
			  keyframes: {
				text: {
				  '0%, 100%': {
					'background-size': '200% 200%',
					'background-position': 'left center',
				  },
				  '50%': {
					'background-size': '200% 200%',
					'background-position': 'right center',
				  },
				},
			  },
		},
	},
	plugins: [forms,typography,...skeleton()],
}
