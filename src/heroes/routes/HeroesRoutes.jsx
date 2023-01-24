import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { HeroPage, SearchPage } from "../pages";
import { DCPage } from "../pages/DCPage";
import { MarvelPage } from "../pages/MarvelPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
