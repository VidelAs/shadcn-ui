import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About  from "./pages/About";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Patitos from "./pages/Patitos";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path="learn" element={<Learn/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="patitos" element={<Patitos/>}/>
        </Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
