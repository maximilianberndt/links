import { StyledApp } from "./styles";
import { globalStyles } from "../../styles";
import { Headline } from "../Common/Headline";
import { Home } from "../../pages/Home";
import { Svgs } from "../Svgs";

const App = () => {
  globalStyles();

  return (
    <StyledApp>
      <Svgs />
      <Headline as="h1">Phantom Links</Headline>

      <main>
        <Home />
      </main>
    </StyledApp>
  );
};

export { App };
