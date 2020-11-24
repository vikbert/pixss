module.exports = {
    title: "Pixss",
    description: "A pragmatical css framework for Minimalist",
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
    base: "/Pixss/",
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
