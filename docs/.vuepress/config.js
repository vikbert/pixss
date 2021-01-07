module.exports = {
    title: "PIXSS",
    description: "PIXSS | A minimal pragmatical css framework",
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
                link: "https://vikbert.github.io/pixss/examples/",
            },
            {
                text: "GitHub",
                link: "https://github.com/vikbert/pixss",
            },
            {
                text: "About Me",
                link: "https://vikbert.github.io/",
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
