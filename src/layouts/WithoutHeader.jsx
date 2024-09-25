import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function WithoutHeader() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default WithoutHeader;
