"use client"
import Style from './Experiences.module.scss'
import { toHumans } from '@/helpers/Date.js'
import { useState, useEffect, useMemo } from 'react'

export default function Experiences () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/experiences`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse)
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const loadingComponent = <div>Loading...</div>
    const errorComponent = <div>Error: {error}</div>
    const dataComponent = (data?.map(element => (
        <article className={Style.card} key={element.id}>
            <aside className={Style.companyBrand}>
                <a href={element.company_url} className={Style.companyLink} target="_blank">
                    <img className={Style.companyLogo}  src={element.company_brand} alt="Logo du centre de formation" />
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
)

    if (loading) {
        <section className={Style.Experiences}>{loadingComponent}</section>
    } else if (error) {
        <section className={Style.Experiences}>{errorComponent}</section>
    } else {        
        <section className={Style.Experiences}>{dataComponent}</section>
    }
}