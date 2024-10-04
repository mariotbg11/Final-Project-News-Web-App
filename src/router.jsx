import { createBrowserRouter } from "react-router-dom";
import IndonesiaNews from "./pages/IndonesiaNews";
import ProgrammingNews from "./pages/ProgrammingNews";
import SearchNews from "./pages/SearchNews";
import SavedNews from "./pages/SavedNews";
import WithHeaderAndSubcribe from "./layouts/WithHeaderAndSubscribe";
import WithoutHeader from "./layouts/WithoutHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeaderAndSubcribe />, // Layout dengan Header
    children: [
      {
        path: "/",
        element: <IndonesiaNews />, // Route ke halaman Indonesia/Home
      },
    ],
  },
  {
    element: <WithoutHeader />, // Layout tanpa Header
    children: [
      {
        path: "/programming",
        element: <ProgrammingNews />, // Route ke halaman Programming
      },
      {
        path: "/search/:keyword",
        element: <SearchNews />, // Route ke halaman Search
      },
      {
        path: "/saved",
        element: <SavedNews />, // Route ke halaman Saved
      },
    ],
  },
]);

export default router;
