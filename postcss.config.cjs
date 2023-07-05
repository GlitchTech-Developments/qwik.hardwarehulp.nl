module.exports = {
	plugins: {
		autoprefixer: {},
		tailwindcss: {},
		cssnano: {},
		"postcss-font-magician": {
			variants: {
				Raleway: {
					300: [],
					400: [],
					700: [],
				},
			},
			foundries: ["google"],
		},
	},
};
