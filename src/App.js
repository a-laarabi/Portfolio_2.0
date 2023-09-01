/* eslint-disable */
import { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Logo from './components/Logo/Logo';
import MyNavbar from './components/navBar/MyNavbar';
import MobileNav from './components/navBar/MobileNav';
import Summary from './components/Banner/Summary';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/Detail/ProjectDetail';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function useWindowWidth() {
  const [windowSize, setWindowSize] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

function App() {
  const size = useWindowWidth();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  })


  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;

    document.querySelectorAll('section').forEach((section) => {
      if (scrollPos >= section.offsetTop - 150 && scrollPos < (section.offsetTop + section.offsetHeight)) {
        setActiveSection(section.id);
      }
    });
  }

  return loading ? (
    <Logo />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Portfolio_2.0" />} />
        <Route
          path="/Portfolio_2.0"
          element={(
            <div className="App">
              <header className="App-header">
                {size < 768 ? <MobileNav activeSection={activeSection}/> : <MyNavbar activeSection={activeSection} />}
              </header>
              <Summary />
              <div className="blackBack">
                <Skills />
                <Projects />
                <About />
                <Contact />
              </div>
            </div>
        )}
        />
        <Route path="/details/:title" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
