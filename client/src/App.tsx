import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';
import Stack from './pages/Stack';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Blog from './pages/Blog'

function MainHome(){
  return (
    <>
      <Nav />
      <Home />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 2">
        <rect width="20" height="2" fill="#2c3a42"/>
        <path transform="translate(0 0.02)" fill="#45525a" d="M 0 2 A 10 1.4 0 0 1 20 2 Z"/>
      </svg>
      <main>
        <Projects />
        <Certificates />
        <Stack />
        <Contacts />
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 2">
        <rect width="20" height="3" fill="#2c3a42"/>
        <path transform="translate(0 0)" fill="#45525a" d="M 0 0 A 10 2 0 0 0 20 0 Z"/>
      </svg>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

