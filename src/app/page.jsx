import Testimonials from "@/components/Testimonials/Testimonials"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home () {
    return (
        <main>
            {/* Section: Model3D */}
            <Testimonials />
            <Projects />
            <EducationsExperiences />
            <Contact />
        </main>
    )
}
