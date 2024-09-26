import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";

function WithHeaderAndSubcribe() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <CallToAction />
    </>
  );
}

export default WithHeaderAndSubcribe;
