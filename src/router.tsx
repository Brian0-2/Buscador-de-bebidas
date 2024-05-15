//Mejora de performance cada que se accede a una pagina va descargando el js necesario
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

//Mejora de performance
const IndexPage = lazy(() => import('./views/IndexPage'));
const FavoritePage = lazy(() => import('./views/FavoritePage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback="Cargando...">
              <IndexPage />
            </Suspense>
            } index >
          </Route>
          <Route path="/favoritos" element={
              <Suspense fallback="Cargando...">
                  <FavoritePage />
              </Suspense>
            }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
