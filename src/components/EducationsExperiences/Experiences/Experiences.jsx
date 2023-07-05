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
            description: "Développement de module pour l'outil de gestion des utilisateur et mise en place des postes de travails pour les clients."
        },
        {
            id: 2,
            title: "Développeur Intégrateur Web",
            start_at: dateExample,
            ended_at: dateExample,
            company_name: "OpenClassrooms",
            company_brand: exampleImage,
            description: "Développement de module pour l'outil de gestion des utilisateur et mise en place des postes de travails pour les clients."
        }
    ]

    const content = data.map(element => (
        <article className={Style.card} key={element.id}>
            <aside className={Style.companyBrand}>
                <a href={element.company_url} className={Style.companyLink} target="_blank">
                    <Image className={Style.companyLogo}  src={exampleImage} alt="Logo du centre de formation" />
                </a>
            </aside>
            <article className={Style.cardContent}>
                <a className={Style.companyLink} href={element.company_url}>{element.company_name}</a>
                <p className={Style.poste}><span className={Style.postName}>Poste:</span>Développeur Web</p>
                <p className={Style.metadata}>du {toHumans(element.start_at)} au {toHumans(element.ended_at)}</p>
                <p className={Style.description}>{element.description}</p>
            </article>
        </article>
    ))

    return (<section className={Style.Experiences}>{content}</section>)
}