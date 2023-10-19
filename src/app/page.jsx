import Testimonials from "@/components/Testimonials/Testimonials"
import EducationsExperiences from "@/components/EducationsExperiences/EducationsExperiences";
import Projects from "@/components/Projects/Projects";

export default function Home () {
    return (
        <>
            <main className="upper-grid">
                {/* Section: Model3D */}
                <Testimonials />
                <Projects />
                <EducationsExperiences />
                {/* Section: Contact */}
            </main>
        </>
    )
}
