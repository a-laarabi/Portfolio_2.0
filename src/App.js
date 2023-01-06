import { useEffect, useState } from 'react';
import MyNavbar from './components/navBar/MyNavbar';
import MobileNav from './components/navBar/MobileNav';
import Summary from './components/Banner/Summary';
import Projects from './components/Projects/Projects';

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
    <div className="App">
      <header className="App-header">
        {size < 768 ? <MobileNav /> : <MyNavbar />}
      </header>
      <Summary />
      <Projects />
    </div>
  );
}

export default App;
