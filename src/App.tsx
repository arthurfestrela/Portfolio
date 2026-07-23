import { BootScreen } from '@/components/BootScreen'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { CobaltBand } from '@/components/sections/CobaltBand'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { AIEdge } from '@/components/sections/AIEdge'
import { About } from '@/components/sections/About'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <>
      <BootScreen />
      <CustomCursor />
      <ScrollProgress />

      <Header />
      <ThemeToggle />

      <main>
        <Hero />
        <CobaltBand />
        <Projects />
        <TechStack />
        <AIEdge />
        <About />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}

export default App
