"use client"
import Style from './Educations.module.scss'
import { toHumans } from '@/helpers/Date.js'
import { useEffect, useState } from 'react'

export default function Educations () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/educations`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse)
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const loadingComponent = <div>Loading...</div>
    const errorComponent = <div>Error: {error}</div>
    const educationsComponent = data?.map(element => (
        <article className={Style.card} key={element.id}>
            <aside className={Style.companyBrand}>
                <a href={element.company_url} className={Style.companyLink} target="_blank">
                    <img className={Style.companyLogo} src={element.company_brand} alt="Logo du centre de formation" />
                </a>
            </aside>
            <article className={Style.cardContent}>
                <a className={Style.companyLink} href={element.company_url} target="_blank">{element.company_name}</a>
                <p className={Style.certification}>{element.title}</p>
                <p className={Style.metadata}>{toHumans(element.start_at)} à {element.ended_at ? toHumans(element.ended_at) : "aujourd'hui"}</p>
                <p className={Style.description}>{element.description}</p>
                {element.certification_url ? (<a className={Style.certificationLink} target="_blank" href={element.certification_url}>Certification</a>) : ""}
            </article>

        </article>
    ))

    return (
        <section className={Style.Educations}>
            {loading ? (loadingComponent) : error ? (errorComponent) : (educationsComponent)}
        </section>
    )
}