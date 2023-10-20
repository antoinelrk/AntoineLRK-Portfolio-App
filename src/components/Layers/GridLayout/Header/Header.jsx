import { CircledIconButton } from '@/components/UI/Buttons/CircledIconButton'
import './Header.scss'
import { NavLink } from '@/components/UI/Links/NavLink'
import Cookies from 'js-cookie'
import { CircledIconLink } from '@/components/UI/Links/CircledIconLink'
import { Suspense, useEffect, useState } from 'react'

export function Header () {
    return <header>
        <div className="centered">
            <div className="app-name">Antoine LRK</div>
            <NavComponent />
        </div>
    </header>
}

function NavComponent () {
    const toggleTheme = () => {
        const currentTheme = Cookies.get('theme')
        if (currentTheme === 'dark') {
            Cookies.set("theme", "light")
            document.body.setAttribute('color-theme', 'light')
        } else {
            Cookies.set("theme", "dark")
            document.body.setAttribute('color-theme', 'dark')
        }
    }

    const [socialsLinks, setSocialsLinks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/social-networks`)
            .then(async (response) => setSocialsLinks(await response.json()))
            .catch((e) => {
                if (e instanceof Error) setError(e.message)
            })
            .finally(() => setLoading(false))
    }, [])

    const listOfLinks = socialsLinks?.map(link => (
        <li key={link.url}>
            <CircledIconLink
                to={link.url}
                title={link.name}
                target="_blank"
                onClick={() => console.log('ok')}
                >
                <figure dangerouslySetInnerHTML={{ __html: link.icon }}></figure>
            </CircledIconLink>
        </li>
    ))

    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <Suspense>{listOfLinks}</Suspense>
            <li>
                <CircledIconButton onClick={toggleTheme}>
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                            <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                        </svg>
                    </figure>
                </CircledIconButton>
            </li>
        </ul>
    </nav>
}