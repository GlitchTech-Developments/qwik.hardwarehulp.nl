module.exports = {
	plugins: {
		autoprefixer: {},
		tailwindcss: {},
		cssnano: {},
		"postcss-font-magician": {
			display: "swap",
			variants: {
				Raleway: {
					300: ["eot, woff2"],
				},
			},
			foundries: ["google"],
		},
	},
};
