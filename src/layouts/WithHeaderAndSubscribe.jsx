import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function WithHeaderAndSubcribe() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <CallToAction />
      <Footer />
    </>
  );
}

export default WithHeaderAndSubcribe;
