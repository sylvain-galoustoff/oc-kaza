import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import Logement from "./components/routes/logement/Logement";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
