import Testimonials from "@/components/Testimonials/Testimonials"
import Biography from "@/components/Biography/Biography"
import Skills from "@/components/Skills/Skills"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";

export default function Home () {
    return (
        <main>
            {/* Section: Model3D */}
            <Testimonials />
            <Biography />
            <Skills />
            <EducationsExperiences />
            <Projects />
            {/* Section: Contact */}
        </main>
    )
}
