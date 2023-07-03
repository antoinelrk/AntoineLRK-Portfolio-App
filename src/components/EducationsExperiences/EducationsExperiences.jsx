"use client"
import Style from './EducationsExperiences.module.scss'
import Educations from './Educations/Educations'
import Experiences from './Experiences/Experiences'
import { useState } from 'react'

const TabContent = ({ tabType }) => {
    let content

    switch (tabType) {
        case "experiences":
            content = <Experiences />
            break;
        case "educations":
            content = <Educations />
            break;
    }

    return content
}

export default function EducationsExperiences () {
    const [activeTab, setActiveTab] = useState(`educations`)

    const toggleTab = (event, value) => {
        document.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
        event.target.classList.add('active')
        setActiveTab(value)
    }

    return (
        <section className={Style.EducationsExperiences}>
            <h2 className={Style.sectionTitle}>FORMATIONS & EXPÉRIENCES</h2>
            <div className={Style.tabsControls}>
                <button className={`${Style.tabsButton} active`} onClick={(event) => toggleTab(event, `educations`)}>Formations</button>
                <button className={`${Style.tabsButton}`} onClick={(event) => toggleTab(event, `experiences`)}>Expériences</button>
            </div>
            <div className={Style.tabsWrapper}>
                <TabContent tabType={activeTab} />
            </div>
        </section>
    )
}