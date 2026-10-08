import { Routes, Route } from "react-router";

import NavbarComponent from "./Elements/navbar";
import Footer from "./Elements/footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;