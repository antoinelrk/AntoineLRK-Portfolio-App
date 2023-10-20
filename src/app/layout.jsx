"use client"
import '../assets/themes/App.scss'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Header } from '@/components/Layers/GridLayout/Header/Header'
import { BackDecoration } from '@/components/Layers/BackDecoration/BackDecoration'
import { BlurOverlay } from '@/components/Layers/BlurOverlay/BlurOverlay'
import { Frame } from '@/components/Layers/Frame/Frame'
import { Footer } from '@/components/Layers/GridLayout/Footer/Footer'

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
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default RootLayout