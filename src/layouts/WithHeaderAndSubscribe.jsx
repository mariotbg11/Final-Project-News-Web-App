import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

function WithHeaderAndSubcribe() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <FaqAccordion />
      <CallToAction />
      <Footer />
    </>
  );
}

export default WithHeaderAndSubcribe;
