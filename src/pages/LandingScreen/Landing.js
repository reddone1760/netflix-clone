import React from "react";
import Banner from "../../components/Landing/Banner/Banner";
import Infos from "../../components/Landing/Infos/Infos";
import Accordion from "../../components/Landing/Accordion/Accordion";
import Footer from "../../components/Landing/Footer/Footer";

function Landing() {
  return (
    <div>
      <Banner />
      <Infos />
      <Accordion />
      <Footer />
    </div>
  );
}

export default Landing;
