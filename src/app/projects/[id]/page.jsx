"use client"
import { useEffect, useState } from "react"

export default function Projects ({params}) {
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`).then(async (response) => {
            const localData = await response.json()
            setProject(localData)
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <>
            <main>
                {loading ? (<div>Loading...</div>) : (<h1>{project?.title}</h1>)}
                <img src={project?.banner} alt={project?.title} />
            </main>
        </>
    )
}
