import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About'
import Project from './Routes/Project';
import Contact from './Routes/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
