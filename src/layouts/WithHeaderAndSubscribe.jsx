import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function WithHeaderAndSubcribe() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
}

export default WithHeaderAndSubcribe;
