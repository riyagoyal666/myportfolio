// rafce => to create a station functional component
import React from "react";
// import Experience from './components/experience/Experience'
import WorkExperience from "./pages/workExperience/WorkExperience";
// import Footer from './components/common/footer/Footer'
// import Navbar from './components/navbar/Navbar'
// import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from './components/testimonials/Testimonials'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarCommon from "./components/common/navbarCommon/NavbarCommon";
import Home from "./pages/Home";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Router>
        <NavbarCommon />
        <Routes>
          {/* <Route path='/' element={<Header/>}/> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/workExperience" element={<WorkExperience />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        {/* <Navbar /> */}
        {/* <Footer /> */}
        {/* <Home /> */}
      </Router>
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <Contacts /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
