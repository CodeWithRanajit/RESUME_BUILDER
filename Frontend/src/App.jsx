import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Preview from "./Pages/Preview";
import Pricing from "./pages/Pricing";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./Pages/Home";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound/>}/>
      <Route path="app" element={<Layout/>} >
        <Route index element={<Dashboard />} />
        <Route path="builder/:resumeId" element={<ResumeBuilder/>} />
      </Route>
      <Route path="/view/:resumeId" element={<Preview />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default App;