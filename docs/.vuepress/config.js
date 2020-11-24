module.exports = {
    title: "PiXSS",
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
        nav: [
            {
                text: "Live Demo",
                link: "https://vikbert.github.io/pixss/demo/",
            },
        ],
        sidebar: [
            ["/", "HOME"],
            ["/layout", "Layout"],
            ["/navigation", "Navigation"],
            ["/form", "Form"],
            ["/widget", "Widget"],
            ["/utils", "Utils"],
        ],
    },
};
