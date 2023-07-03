import Style from './Experiences.module.scss'
import Image from 'next/image'
import exampleImage from './example.png'
import { toHumans } from '@/helpers/Date.js'

export default function Experiences () {

    const dateExample = new Date("1994-02-06 12:10:00").toLocaleString('fr-FR', { timeZone: "Europe/Paris" })

    const data = [
        {
            id: 1,
            title: "Développeur Intégrateur Web",
            start_at: dateExample,
            ended_at: dateExample,
            company_name: "OpenClassrooms",
            company_brand: exampleImage,
            description: "Passionné de technologie en tout genre depuis plus de 15 ans, j’expérimente des technologies et conçois des outils logiciels simples et efficaces pour particulier, association ou entreprise. Ayant une grande appétance pour l’administration système, le “hardware” en général; je souhaites me diriger vers une carrière axée Backend. Je favorise la création d’interface pour les webmasters ou bien les content managers. Passionné de technologie en tout genre depuis plus de 15 ans, j’expérimente des technologies et conçois des outils logiciels simples et efficaces pour particulier, association ou entreprise. Ayant une grande appétance pour l’administration système, le “hardware” en général; je souhaites me diriger vers une carrière axée Backend. Je favorise la création d’interface pour les webmasters ou bien les content managers."
        },
        {
            id: 2,
            title: "Développeur Intégrateur Web",
            start_at: dateExample,
            ended_at: dateExample,
            company_name: "OpenClassrooms",
            company_brand: exampleImage,
            description: "Passionné de technologie en tout genre depuis plus de 15 ans, j’expérimente des technologies et conçois des outils logiciels simples et efficaces pour particulier, association ou entreprise. Ayant une grande appétance pour l’administration système, le “hardware” en général; je souhaites me diriger vers une carrière axée Backend. Je favorise la création d’interface pour les webmasters ou bien les content managers."
        }
    ]

    const content = data.map(element => (
        <article className={Style.card} key={element.id}>
            <article className={Style.cardContent}>
                <h3 className={Style.cardTitle}>{element.title}</h3>
                <p className={Style.metadata}>du {toHumans(element.start_at)} au {toHumans(element.ended_at)}<i>—</i><span>OpenClassrooms</span></p>
                <p className={Style.description}>{element.description}</p>
            </article>
            <aside className={Style.companyBrand}>
                <a href={element.company_url} className={Style.experiencesCompanyLink}>
                    <Image className={Style.experiencesCompanyLogo}  src={exampleImage} alt="Logo du centre de formation" />
                </a>
            </aside>
        </article>
    ))

    return (<section className={Style.Experiences}>{content}</section>)
}