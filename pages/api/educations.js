export default async function handler (request, response) {
    const data = [
        {
            id: 1,
            title: "Développeur Intégrateur Web",
            start_at: "2022-12-08",
            ended_at: "",
            company_name: "OpenClassrooms",
            company_brand: "https://static.antoinelrk.com/portfolio/educations/F6A2E7D4C1B98053.png",
            company_url: "https://openclassrooms.com",
            certification_url: "",
            description: "Intégration de maquette, frontend: javascript, react. Backend: Développement d'API REST. Optimisation du SEO et performance des medias. Mise en production de site dynamique et statique."
        },
        {
            id: 2,
            title: "Baccalauréat Professionnel: SEN",
            start_at: "2009-09-01 00:00:00",
            ended_at: "2013-07-01 00:00:00",
            company_name: "Lycée Professionnel de l'Estuaire",
            company_brand: "https://static.antoinelrk.com/portfolio/educations/3E0D9F8C7B654A21.png",
            company_url: "https://lpestuaire.fr/",
            certification_url: "https://static.antoinelrk.com/portfolio/educations/certifications/LRK_BACCALAUREAT_PROFESSIONNEL.pdf",
            description: "Cursus scolaire professionnel, stages en entreprise. Aquisition de connaissance en: Electricité, électronique générale, multimedia et informatique générale (technicien)."
        }
    ]

    response.status(200)
    response.json(data)
}