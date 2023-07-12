"use client"
import Skill from './Skill/Skill'
import Style from './Skills.module.scss'
import { useEffect, useState } from 'react'

export default function Skills () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/skills`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse)
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const loadingComponent = <div>Loading...</div>
    const errorComponent = <div>Error: {error}</div>

    const skillsComponent = (
        <>
            <h2 className="sectionTitle">Compétences</h2>
            <section className={Style.skillsCategory}>
                <ul className={Style.skillsWrapper}>{data?.map(data => (<li><Skill data={data} /></li>))}</ul>
            </section>
        </>
    )

    return (
        <section className={Style.Skills}>
            {loading ? (loadingComponent) : error ? (errorComponent) : (skillsComponent)}
        </section>
    )
}