export default async function handler (request, response) {
    const data = [
        {
            id: 1,
            title: "Booki",
            tags: ["javascript", "figma", "nodejs", "openclassrooms"],
            description: "Dans le cadre de ma formation chez OpenClassrooms, j'ai eu l'occasion d'intégrer une maquette d'un site de Booking. Ce projet m'a offert l'opportunité de me former le HTML5 ainsi que sur SASS",
            banner_url: "https://static.antoinelrk.com/portfolio/projects/2F9D8B7A4C6E5031.png",
            demo_url: "https://antoinelrk.github.io/P2_Booki/",
            repo_url: "https://github.com/antoinelrk/P2_Booki"
        },
        {
            id: 2,
            title: "Kasa",
            tags: ["javascript", "react", "formation", "figma"],
            description: "Le but de ce projet de formation était de contruire une application React, uniquement la partie frontend. Une maquette m'a été fournie pour réaliser l'intégration. J'ai également du connecter l'application à une API",
            banner_url: "https://static.antoinelrk.com/portfolio/projects/A5D307F9BE2C18E4.png",
            demo_url: "https://kasa.antoinelrk.com",
            repo_url: "https://github.com/antoinelrk/P6_Kasa"
        },
        {
            id: 3,
            title: "Nina Carducci",
            tags: ["seo", "javascript", "formation", "performances"],
            description: "Dans ce projet de formation, mon travail consistait à optimiser le performances ainsi que le référencement naturel. J'ai pu apprendre à utiliser des outils tel que LightHouse ou GTMetrix",
            banner_url: "https://static.antoinelrk.com/portfolio/projects/87B6A1C9D5E23F04.png",
            demo_url: "https://nina-carducci.antoinelrk.com/",
            repo_url: "https://github.com/antoinelrk/P5_NinaCarducci"
        }
    ]

    response.status(200)
    response.json(data)
}