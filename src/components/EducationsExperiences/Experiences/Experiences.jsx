import Style from './Experiences.module.scss'
import Image from 'next/image'
import exampleImage from './example.png'

export default function Experiences () {
    const data = [
        {
            id: 1,
            title: "Développeur Intégrateur Web",
            start_at: new Date(),
            ended_at: new Date(),
            company_name: "OpenClassrooms",
            company_brand: exampleImage
        },
        {
            id: 2,
            title: "Développeur Intégrateur Web",
            start_at: new Date(),
            ended_at: new Date(),
            company_name: "OpenClassrooms",
            company_brand: exampleImage
        }
    ]

    const content = data.map(element => (
        <article className={Style.card}>
            <h3 className={Style.cardTitle}>{element.title}</h3>
            <p className={Style.educationsDate}>{element.start_at.getTime().toString()} - {element.ended_at.getTime().toString()}<i>-</i><span>OpenClassrooms</span></p>
            <a href="" className={Style.experiencesCompanyLink}>
                <Image className={Style.educationsCompanyLogo}  src={exampleImage} alt="Logo du centre de formation" />
            </a>
        </article>
    ))

    return (<section className={Style.Experiences}>{content}</section>)
}