import Hero from "@/components/home/Hero";
import LearningManagementSystem from "@/components/home/LearningManagementSystem";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import ManagementDevelopmentProgram from "@/components/home/ManagementDevelopmentProgram";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
      <ManagementDevelopmentProgram />
    </main>
  );
}
