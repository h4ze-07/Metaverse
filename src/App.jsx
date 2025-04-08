import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';
import { Footer, Navbar } from "./components";
import { About, Enter, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from './sections';

function App() {

    const lenisRef = useRef(null);
    const rafHandleRef = useRef(null);

    useEffect(() => {
        if (!lenisRef.current) {
            lenisRef.current = new Lenis({
                duration: 0.6,
                easing: (t) => 1 - Math.pow(1 - t, 3),
                smooth: true,
                smoothTouch: true,
            });
            const raf = (time) => {
                lenisRef.current?.raf(time);
                rafHandleRef.current = requestAnimationFrame(raf);
            };
            rafHandleRef.current = requestAnimationFrame(raf);
        }

        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = undefined;
            }
            if (rafHandleRef.current) {
                cancelAnimationFrame(rafHandleRef.current);
                rafHandleRef.current = null;
            }
        };
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
