import Style from './Educations.module.scss'
import Image from 'next/image'
import exampleImage from './example.png'

export default function Educations () {

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
            <a className={Style.educationsCertificationLink} target="_blank" href="#">Certification</a>
            <Image className={Style.educationsCompanyLogo}  src={exampleImage} alt="Logo du centre de formation" />
        </article>
    ))

    return (<section className={Style.Educations}>{content}</section>)
}