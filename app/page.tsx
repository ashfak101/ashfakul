import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { WorkSection } from '@/components/sections/work';
import { ExperienceSection } from '@/components/sections/experience';
import { PricingSection } from '@/components/sections/pricing'

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
