import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import William from './components/William';
import VolunteerTour from './components/VolunteerTour';
import OurMission from './components/OurMission';
import Achievements from './components/Achievements';
import DocumentarySection from './components/DocumentarySection';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/navbar/About';
import Campaigns from './components/navbar/Campaigns';
import Contributors from './components/navbar/Contributors';
import Contact from './components/navbar/Contact';
import Donate from './components/navbar/Donate';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <William />
                        <VolunteerTour />
                        <OurMission />
                        <Achievements />
                        <DocumentarySection />
                        <HelpSection />
                        <Donate />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;