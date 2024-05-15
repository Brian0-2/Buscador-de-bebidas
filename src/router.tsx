import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritePage from "./views/FavoritePage";
import Layout from "./layouts/Layout";

// npm i @headlessui/react

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index ></Route>
          <Route path="/favoritos" element={<FavoritePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
