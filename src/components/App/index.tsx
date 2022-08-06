import { StyledApp } from "./styles";
import { globalStyles } from "../../styles";
import { Headline } from "../Common/Headline";
import { Home } from "../../pages/Home";
import { Detail } from "../../pages/Detail";
import { Svgs } from "../Svgs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path=":id" element={<Detail />} />
            {/* <Route path="/detail/:id" component={<Detail />} /> */}
          </Routes>
        </main>
      </StyledApp>
    </BrowserRouter>
  );
};

export { App };
