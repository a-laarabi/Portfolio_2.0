import { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
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

// function mobileSize() {
//   return(

//   );
// }

// function desk() {
//   return(

//   );
// }

function App() {
  const size = useWindowWidth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Portfolio_2.0" />} />
        <Route
          path="/Portfolio_2.0"
          element={(
            <div className="App">
              <header className="App-header">
                {size < 768 ? <MobileNav /> : <MyNavbar />}
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
