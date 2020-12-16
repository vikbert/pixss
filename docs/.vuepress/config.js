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
            href: `https://vikbert.github.io/pixss/build/styles/pixss.min.css`,
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
