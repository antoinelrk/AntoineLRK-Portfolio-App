"use client"
import '../assets/themes/App.scss'
import Link from 'next/link'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'

function RootLayout({children}) {
    useEffect(() => {
        if (Cookies.get('theme') === undefined) {
            if (window.matchMedia) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    Cookies.set('theme', 'dark')
                    document.body.setAttribute('color-theme', 'dark')
                } else {
                    Cookies.set('theme', 'light')
                    document.body.setAttribute('color-theme', 'light')
                }
            }
        } else {
            document.body.setAttribute('color-theme', Cookies.get('theme'))
        }
    })

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

    return (
        <html lang="fr">
            <head>
                <title>Antoine LRK — Web developer</title>
            </head>
            <body>
                <div id="app">
                    <header>
                        <div className="app-name">Antoine LRK</div>
                        <nav>
                            <ul>
                                <li><Link className="NavLink" href="/">Home</Link></li>
                                <li><Link className="NavLink" href="/about">About</Link></li>
                                <li>
                                    <button className="ToggleTheme" onClick={() => toggleTheme()}>
                                        <div className="toggle-theme-icon">
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                                    <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {children}
                    <footer>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/>
                            </svg>
                        </div>
                        Antoine LRK — 2023
                    </footer>
                </div>
            </body>
        </html>
    )
}

export default RootLayout