module.exports = {
	plugins: {
		autoprefixer: {},
		tailwindcss: {},
		cssnano: {},
		"postcss-font-magician": {
			display: "swap",
			variants: {
				Raleway: {
					300: ["woff2"],
				},
			},
			hosted: ["/fonts"],
		},
	},
};
