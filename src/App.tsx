
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { AiChatbot } from './components/AiChatbot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#000000] text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection onOpenChat={() => setIsChatOpen(true)} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <AiChatbot
        isOpenExternal={isChatOpen}
        onToggleExternal={(val) => setIsChatOpen(val)}
        onCloseExternal={() => setIsChatOpen(false)}
      />
    </div>
  );
}

export default App;