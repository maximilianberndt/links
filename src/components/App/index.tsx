import { StyledApp } from "./styles";
import { globalStyles } from "../../styles";
import { Headline } from "../Common/Headline";
import { Home } from "../../pages/Home";
import { Detail } from "../../pages/Detail";
import { Svgs } from "../Svgs";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  globalStyles();

  return (
    <BrowserRouter>
      <StyledApp>
        <Svgs />
        <Headline as="h1">Phantom Links</Headline>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submission/:id" element={<Detail />} />
          </Routes>
        </main>
      </StyledApp>
    </BrowserRouter>
  );
};

export { App };
