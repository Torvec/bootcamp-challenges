
import './App.css'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />
      <main className="flex-grow bg-white text-black">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App
