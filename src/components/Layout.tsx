import Header from "@/pages/Header"; 
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout