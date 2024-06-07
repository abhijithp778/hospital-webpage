import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/faq"element={<Faq/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
