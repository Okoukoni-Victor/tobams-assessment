import Hero from "@/components/home/Hero";
import LearningManagementSystem from "@/components/home/LearningManagementSystem";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import ManagementDevelopmentProgram from "@/components/home/ManagementDevelopmentProgram";
import TransformationHub from "@/components/home/TransformationHub";
import TrainingTheConsultant from "@/components/home/TrainingTheConsultant";
import CTABanner from "@/components/home/CTABanner";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
      <ManagementDevelopmentProgram />
      <TransformationHub />
      <TrainingTheConsultant />
      <CTABanner />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
