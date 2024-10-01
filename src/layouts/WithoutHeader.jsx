import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import CallToAction from "../components/CallToAction";

function WithoutHeader() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FaqAccordion />
      <CallToAction />
      <Footer />
    </>
  );
}

export default WithoutHeader;
