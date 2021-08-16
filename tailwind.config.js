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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
