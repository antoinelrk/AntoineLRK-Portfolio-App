import Testimonials from "@/components/Testimonials/Testimonials"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";
import { Carousel } from "@/components/Carousel/Carousel"

export default function Home () {
    return (
        <>
            <main className="upper-grid">
                {/* Section: Model3D */}
                <Testimonials />
                {/* <Projects /> */}
                <Carousel />
                <EducationsExperiences />
                {/* Section: Contact */}
            </main>
        </>
    )
}
