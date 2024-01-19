import React from "react";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/common/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Experience from "../components/experience/Experience";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contacts />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Home;
