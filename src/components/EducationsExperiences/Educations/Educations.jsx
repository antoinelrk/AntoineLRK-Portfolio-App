import Style from './Educations.module.scss'
import Image from 'next/image'
import exampleImage from './example.png'
import { toHumans } from '@/helpers/Date.js'

export default function Educations () {
    const dateExample = new Date("1994-02-06 12:10:00").toLocaleString('fr-FR', { timeZone: "Europe/Paris" })

    const data = [
        {
            id: 1,
            title: "Développeur Intégrateur Web",
            start_at: dateExample,
            ended_at: dateExample,
            company_name: "OpenClassrooms",
            company_brand: exampleImage,
            company_url: "https://google.com",
            description: "lorem ipsum"
        },
        {
            id: 2,
            title: "Développeur Intégrateur Web",
            start_at: dateExample,
            ended_at: dateExample,
            company_name: "OpenClassrooms",
            company_brand: exampleImage,
            company_url: "https://google.com",
            description: "Lorem ipsum"
        }
    ]

    const content = data.map(element => (
        <article className={Style.card} key={element.id}>
            <article className={Style.cardContent}>
                <h3 className={Style.cardTitle}>{element.title}</h3>
                <p className={Style.metadata}>du {toHumans(element.start_at)} au {toHumans(element.ended_at)}<i>—</i><span>OpenClassrooms</span></p>
                <p className={Style.description}>{element.description}</p>
                <a className={Style.educationsCertificationLink} target="_blank" href="#">Certification</a>
            </article>
            <aside className={Style.companyBrand}>
                <a href={element.company_url} className={Style.educationsCompanyLink} target="_blank">
                    <Image className={Style.educationsCompanyLogo}  src={exampleImage} alt="Logo du centre de formation" />
                </a>
            </aside>
        </article>
    ))

    return (<section className={Style.Educations}>{content}</section>)
}