import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritePage from "./views/FavoritePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/favoritos" element={<FavoritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
