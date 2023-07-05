import Testimonials from "@/components/Testimonials/Testimonials"
import Manifest from "@/components/Biography/Biography"
import Skills from "@/components/Skills/Skills"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";

export default function Home () {
    return (
        <main>
            {/* Section: Model3D */}
            <Testimonials />
            <Manifest />
            <Skills />
            <EducationsExperiences />
            {/* Section: Projects */}
            {/* Section: Contact */}
        </main>
    )
}
