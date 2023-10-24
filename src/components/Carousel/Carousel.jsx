"use client"
import './Carousel.scss'
import { Suspense, useEffect, useState } from 'react'
import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'

export function Carousel () {
    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/projects`).then(async (response) => {
            setProjects(await response.json())
        }).catch((e) => {
            if (e instanceof Error) setError(e.message)
        }).finally(() => setLoading(false))
    }, [])

    const sliders = projects?.map(project => (
        <SwiperSlide className="SwiperSlide">
            <img src={project.banner} alt="" />
            <span className="wip">WIP</span>
        </SwiperSlide>
    ))

    return <section className="carousel">
        <div className="section-title">
            <span className="number">02</span>
            <h2>My Realizations</h2>
        </div>
        <Swiper
            className="Swiper upper-grid"
            slidesPerView={2.5}
            spaceBetween={120}
            speed={700}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[
                Navigation,
                Pagination,
                Scrollbar,
                Autoplay
            ]}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
        >
            <div className="swiper-wrapper">
                {sliders}
            </div>
        </Swiper>
    </section>
}