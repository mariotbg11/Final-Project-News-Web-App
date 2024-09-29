import { createBrowserRouter } from "react-router-dom";
import IndonesiaNews from "./pages/IndonesiaNews";
import ProgrammingNews from "./pages/ProgrammingNews";
import SearchNews from "./pages/SearchNews";
import WithHeaderAndSubcribe from "./layouts/WithHeaderAndSubscribe";
import WithoutHeader from "./layouts/WithoutHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeaderAndSubcribe />, // Layout dengan Header
    children: [
      {
        path: "/",
        element: <IndonesiaNews />,
      },
    ],
  },
  {
    path: "/programming",
    element: <WithoutHeader />, // Layout tanpa Header
    children: [
      {
        path: "/programming",
        element: <ProgrammingNews />,
      },
    ],
  },
  {
    path: "/search/:keyword",
    element: <WithoutHeader />,
    children: [
      {
        path: "/search/:keyword",
        element: <SearchNews />,
      },
    ],
  },
]);

export default router;
