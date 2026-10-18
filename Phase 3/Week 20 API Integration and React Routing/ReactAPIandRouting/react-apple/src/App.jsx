import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Mac from "./pages/Mac/Mac";
import Ipad from "./pages/Ipad/Ipad";
import Iphone from "./pages/Iphone/Iphone";
import Watch from "./pages/Watch/Watch";
import Tv from "./pages/Tv/Tv";
import Music from "./pages/Music/Music";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Cart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />   {/* we can use path="/" instead of index */}
        <Route path="mac" element={<Mac />} />
        <Route path="ipnone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
