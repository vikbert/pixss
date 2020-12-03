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
      [
        "link",
        {
            rel: "stylesheet",
            href: `https://vikbert.github.io/pixss/demo/styles/pixss.min.css`,
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
