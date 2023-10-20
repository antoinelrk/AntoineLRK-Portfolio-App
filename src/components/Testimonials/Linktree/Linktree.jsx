import Style from './Linktree.module.scss'
import { useEffect, useState } from "react"

export default function Linktree () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/social-networks`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse)
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const listOfLinks = data?.map(link => (
        <li key={link.url}>
            <a className={Style.socialLink} href={link.url} target="_blank" title={link.name}>
                <figure dangerouslySetInnerHTML={{ __html: link.icon }}></figure>
            </a>
        </li>
    ))

    if (loading) return (<div>Loading...</div>)
    else if (error) return (<div>Error: {error}</div>)
    else return (<article className={Style.Linktree}><ul>{listOfLinks}</ul></article>)
}