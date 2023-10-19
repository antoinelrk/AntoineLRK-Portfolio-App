"use client"
import '../assets/themes/App.scss'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Header } from '@/components/Layers/GridLayout/Header'
import { BackDecoration } from '@/components/Layers/BackDecoration/BackDecoration'
import { BlurOverlay } from '@/components/Layers/BlurOverlay/BlurOverlay'
import { Frame } from '@/components/Layers/Frame/Frame'

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

    return (
        <html lang="fr">
            <head>
                <title>Antoine LRK — Web developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Description du site" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Antoine LRK, développeur web junior" />
                <meta property="og:description" content="Enthousiaste et passionné par la création d'expériences utilisateur captivantes et la résolution de problèmes techniques. Compétences en HTML, CSS et frameworks JavaScript, à la recherche d'opportunités pour contribuer à des projets innovants et évoluer dans un environnement dynamique." />
                <meta property="og:image" content="https://static.antoinelrk.com/portfolio/AntoineLRK.webp" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Antoine LRK, développeur web junior" />
                <meta name="twitter:description" content="Enthousiaste et passionné par la création d'expériences utilisateur captivantes et la résolution de problèmes techniques. Compétences en HTML, CSS et frameworks JavaScript, à la recherche d'opportunités pour contribuer à des projets innovants et évoluer dans un environnement dynamique." />
                <meta name="twitter:image" content="https://static.antoinelrk.com/portfolio/AntoineLRK.webp" />
                <meta name="twitter:site" content="@antoinelrk" />
                <meta name="twitter:creator" content="@antoinelrk" />
            </head>
            <body>
                <div id="app">
                    <BackDecoration />
                    <BlurOverlay />
                    <Frame />
                    <main className="under-grid">
                        <Header />
                    </main>
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