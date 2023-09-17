import { Navbar, Footer } from "./components"
import { Hero, About, Explore, GetStarted, WhatsNew, World, Insights, Feedback, Enter } from './sections'

function App() {

  return (
    <main className=" bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="z-0 gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="z-0 gradient-04" />
        <WhatsNew />
      </div>
      <div className="relative">
      <div className="z-0 gradient-02" />
        <World />
      </div>
      <div className="relative">
        <Insights />
        <div className="z-0 gradient-04" />
        <Feedback />
        <Enter />
      </div>
      <Footer />
    </main>
  )
}

export default App
