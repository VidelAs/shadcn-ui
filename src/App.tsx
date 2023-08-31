import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About  from "./pages/About";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path="learn" element={<Learn/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
