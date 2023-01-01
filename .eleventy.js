module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: "_src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
		templateFormats: ["html", "md", "njk", "css"],
		htmlTemplateEngine: "njk",
		markdownTemplate: "njk",
		setUseGitIgnore: false,
	};
};
