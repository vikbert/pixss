module.exports = {
    title: "Pixss",
    description: "PiXSS | A minimal pragmatical css framework",
    head: [
        [
            "link",
            {
                rel: "stylesheet",
                href: `https://fonts.googleapis.com/css?family=Major+Mono+Display`,
            },
        ],
    ],
    plugins: [],
    base: "/pixss/",
    themeConfig: {
        lastUpdated: "Last Updated",
        docsDir: "docs",
        nav: [{ text: "HowTo", link: "" }],
        sidebar: [
            ["/", "HOME"],
            ["/layout", "Layout"],
        ],
    },
};
