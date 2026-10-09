import { Routes, Route } from "react-router";
import NavbarComponent from "./Elements/navbar";
import Footer from "./Elements/footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
