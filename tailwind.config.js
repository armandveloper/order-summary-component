module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'body-pattern-m': 'url(../images/pattern-background-mobile.svg)',
				'body-pattern-d': 'url(../images/pattern-background-desktop.svg)',
			}),
			fontFamily: {
				body: ['"Red Hat Display"', 'sans-serif'],
			},
			colors: {
				'pale-blue': 'hsl(225, 100%, 94%)',
				'bright-blue': 'hsl(245, 75%, 52%)',
				'very-pale-blue': 'hsl(225, 100%, 98%)',
				'desaturated-blue': 'hsl(224, 23%, 55%)',
				'dark-blue': 'hsl(223, 47%, 23%)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
