import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Mac from './pages/Mac/Mac'
import Iphone from './pages/Iphone/Iphone'
import Ipad from './pages/Ipad/Ipad'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
