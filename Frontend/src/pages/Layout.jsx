import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <>
    <div>
        <div>
          <Navbar/>
          <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout;