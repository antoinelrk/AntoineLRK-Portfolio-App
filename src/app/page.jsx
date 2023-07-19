import Testimonials from "@/components/Testimonials/Testimonials"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";
import dotenv from 'dotenv'
dotenv.config()

export default function Home () {
    console.log(process.env.APP_NAME)
    return (
        <main>
            {/* Section: Model3D */}
            <Testimonials />
            <Projects />
            <EducationsExperiences />
            {/* Section: Contact */}
        </main>
    )
}

export const env = process.env
