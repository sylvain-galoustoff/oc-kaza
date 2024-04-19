import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Jumbo from "./components/common/Jumbo";
import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import Logement from "./components/routes/logement/Logement";

function App() {
  return (
    <div id="app">
      <Header />
      <Jumbo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </div>
  );
}

export default App;
