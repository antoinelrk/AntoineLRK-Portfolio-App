import Testimonials from "@/components/Testimonials/Testimonials"
import Skills from "@/components/Skills/Skills"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";

export default function Home () {
    return (
        <main>
            {/* Section: Model3D */}
            <Testimonials />
            {/* <Skills /> */}
            <Projects />
            <EducationsExperiences />
            {/* Section: Contact */}
        </main>
    )
}
