import "./App.css";
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
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/layout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />{" "}
        {/* we can use path="/" instead of index */}
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
