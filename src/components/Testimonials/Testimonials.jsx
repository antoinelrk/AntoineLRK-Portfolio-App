"use client"
import Style from './Testimonials.module.scss'
import Linktree from './Linktree/Linktree.jsx'
import { useEffect, useState } from 'react'

export default function Testimonials () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/profiles`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse[0])
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const loadingComponent = <div>Loading...</div>
    const errorComponent = <div>Error: {error}</div>
    const testimonialsComponent = <>
        <div className={Style.avatarWrapper}><img src={data?.avatar} alt={`Photo d'${data?.display_name}`} /></div>
        <div className={Style.textualElements}>
            <h1 className={Style.name}>{data?.display_name}</h1>
            <h2 className={Style.jobName}>Développeur web</h2>
            {/* <h2 className={Style.jobName}>{data?.job_title}</h2> */}
            {/* <h3 className={Style.jobMeta}>Freelance since 09-2019</h3> */}
        </div>
        <Linktree />
        <a className={Style.cvDownload} href={data?.cv_url} target="_blank" title="Télécharger mon CV">
            Download my CV
            <span className={Style.icon}>
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 512 512">
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                    </svg>
                </figure>
            </span>
        </a>
    </> 

    const bioComponent = <p dangerouslySetInnerHTML={ { __html: data?.biography} }></p>

    return (<>
        <section className={Style.Testimonials}>
            {loading ? (loadingComponent) : error ? (errorComponent) : (testimonialsComponent)}
        </section>
        <section className={Style.Biography}>
            <div className="section-title">
                <span className="number">01</span>
                <h2>About me</h2>
            </div>
            {loading ? (loadingComponent) : error ? (errorComponent) : (bioComponent)}
        </section>
    </>
    )
}