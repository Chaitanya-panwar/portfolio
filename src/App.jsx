import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const App = () => {
  return (
    <div className="bg-[#050414]">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
          <a className=" md-bottom-10 bottom-24 right-12 fixed rounded-md p-1 w-10 h-10 z-50" href="https://wa.me/9302997719">
       <FaWhatsapp   style={{
              background: 'linear-gradient(90deg, #34c235, #5bf573)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #34c235, 0 0 40px #34c235',
            }} className=" fixed rounded-md p-1" color="white" size={42}/> 
          </a>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
         









