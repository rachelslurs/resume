import AboutMe from 'src/components/Articles/AboutMe'
import Achievements from 'src/components/Articles/Achievements'
import Professional from 'src/components/Articles/Professional'
import Skills from 'src/components/Articles/Skills'
import { Footer } from 'src/components/Footer/Footer'
import { Header } from 'src/components/Header/Header'

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="grid grid-cols-1">
          <AboutMe />
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
