import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "../Components/Footer";
import HeaderComponent from "../Components/Header";
import ContactContainer from "../Container/Contact";
import DetailsContainer from "../Container/Details";
import TvSeriesContainer from "../Container/TvSeries";
import SearchContainer from "../Container/Search";
import AboutContainer from "../Container/About";
import LoginContainer from "../Container/Login";
import RegisterContainer from "../Container/Register";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />

          <Route path="/" element={<TvSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailsContainer />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
