import Lenis from 'lenis';
import { useEffect } from 'react';
import { Footer, Navbar } from "./components";
import { About, Enter, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from './sections';

function App() {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

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
