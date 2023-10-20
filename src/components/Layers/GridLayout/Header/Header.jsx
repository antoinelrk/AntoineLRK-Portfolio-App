import { CircledIconButton } from '@/components/UI/Buttons/CircledIconButton'
import './Header.scss'
import { NavLink } from '@/components/UI/Links/NavLink'
import Cookies from 'js-cookie'

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

    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
                <CircledIconButton onClick={() => console.log('ok')}>
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                            <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                        </svg>
                    </figure>
                </CircledIconButton>
            </li>
            {/* <li>
                <button name="toggleTheme" className="ToggleTheme" onClick={() => toggleTheme()}>
                    <div className="toggle-theme-icon">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                            </svg>
                        </figure>
                    </div>
                </button>
            </li> */}
        </ul>
    </nav>
}