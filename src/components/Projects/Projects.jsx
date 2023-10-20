"use client"
import Style from './Projects.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'

export default function Projects () {
    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [tags, setTags] = useState(null)
    const [selectedTag, setSelectedTags] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/projects`).then(async (response) => {
            const dataResponse = await response.json()
            setData(dataResponse)

            const tagsSet = new Set()

            // dataResponse.map(p => {
            //     p.tags.map(tag => tagsSet.add(tag))
            // })

            // setTags(Array.from(tagsSet))

        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const loadingComponent = <div className={Style.loadingComponent}>Loading...</div>
    const errorsComponent = <div className={Style.errorsComponent}>Error: {error}</div>

    let renderedData = filteredData ?? data

    const projectsElements = renderedData?.map((element, index) => (
        <SwiperSlide    
            className={Style.SwiperSlide}
            key={index}
        >
            <li className={Style.projectElement} key={index}>
                <img src={element.banner} alt="" />
                <div className={Style.cardContent}>
                    <h3 className={Style.cardTitle}>{element.title}</h3>

                    {/* <div className={Style.tags}>
                        <ul className={Style.tagsList}>{element.tags.map(tag => (<li className={Style.tag}>#{tag}</li>))}</ul>
                    </div> */}

                    <p className={Style.cardDescription}>{element.description}</p>
                    <div className={Style.cardActions}>
                        {element.demo_url ? (
                            <a href={element.demo_url} target="_blank" className={Style.cardLink}>
                            Demo
                            <div className={Style.cardLinkIcon}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                    </svg>
                                </figure>
                            </div>
                            </a>
                        ) : ""}

                        {element.repository_url ? (
                            <a href={element.repository_url} target="_blank" className={Style.cardLink}>
                                Github
                                <div className={Style.cardLinkIcon}>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 496 512">
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                        </svg>
                                    </figure>
                                </div>
                            </a>
                        ) : ""}
                        <Link className={`${Style.cardLink} ${Style.bouncing}`} href={`/projects/${element.id}`}>
                            Voir le projet
                            <div className={Style.cardLinkIcon}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512">
                                        <path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"/>
                                    </svg>
                                </figure>
                            </div>
                        </Link>
                    </div>
                </div>
            </li>
        </SwiperSlide>
    ))

    // const toggleFilter = (event, value) => {
    //     document.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
    //     event.target.classList.add('active')

    //     setFilteredData(value === null ? data : data.filter((item) => item.tags.includes(value)))
    //     setSelectedTags(value)
    // }

    // const tagsFilterElement = tags?.map(tag => (
    //     <li className={Style.tagListElement}>
    //         <button onClick={(event) => toggleFilter(event, tag)} >{tag}</button>
    //     </li>
    // ))
    const tagsFilterElement = null

    return (
        <>
            <section className={Style.Projects}>
                <div className="section-title">
                    <span className="number">02</span>
                    <h2>My Realizations</h2>
                </div>
                {loading ? (loadingComponent) : error ? (errorsComponent) : (
                    <>
                        <ul className={Style.projectsFilterWrapper}>
                            {tagsFilterElement}

                            {selectedTag !== null && (
                                <li className={Style.tagListElement}>
                                    <button onClick={(event) => toggleFilter(event, null)} >Reset</button>
                                </li>)
                            }
                        </ul>
                        <ul className={Style.projectsWrapper}>
                            <Swiper
                                className={Style.Swiper}
                                spaceBetween={24}
                                slidesPerView={1}
                                speed={700}
                                autoplay={{
                                    delay: 10000,
                                    disableOnInteraction: false,
                                 }}
                                modules={[
                                    Navigation,
                                    Pagination,
                                    Scrollbar,
                                    Autoplay
                                ]}
                                onSwiper={(swiper) => {}}
                                onSlideChange={() => {}}
                            >
                                {projectsElements}
                            </Swiper>
                        </ul>
                    </>
                )}
            </section>
        </>
    )
}