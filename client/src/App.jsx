import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Preview from "./Pages/Preview";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Pricing from "./pages/Pricing";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="app" element={<Layout/>} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="builder/:resumeId" element={<ResumeBuilder/>} />
      </Route>
      <Route path="/view/:resumeId" element={<Preview />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App;