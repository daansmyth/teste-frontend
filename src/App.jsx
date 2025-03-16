import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// COMPONENTS
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Call from './components/Call/Call.jsx';

// PAGES
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Faq from './pages/Faq.jsx'
import News from './pages/News.jsx'
import NoticiaDetalhe from './pages/NoticiaDetalhe.jsx';

function App() {

  return (
    <div className='corpo'>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:id' element={<NoticiaDetalhe />} />
          </Routes>
          <Call />
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
