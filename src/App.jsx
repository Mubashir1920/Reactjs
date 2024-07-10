
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import About from './Pages/about.jsx';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/aboutus' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
