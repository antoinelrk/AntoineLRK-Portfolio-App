export default async function handler (request, response) {
    const data = [
        {
            id: 1,
            title: "Développeur Intégrateur Web",
            start_at: "2022-08-12 00:00:00",
            ended_at: "2022-08-12 00:00:00",
            company_name: "OpenClassrooms",
            company_url: "https://openclassrooms.com",
            company_brand: "https://static.antoinelrk.com/portfolio/projects/87B6A1C9D5E23F04.png",
            description: "Développement de module pour l'outil de gestion des utilisateur et mise en place des postes de travails pour les clients."
        }
    ]

    response.status(200)
    response.json(data)
}