import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// import { BrowserRouter } from "react-router-dom";

import "./Styles/index.css";
import "./Styles/Header.css";
import "./Styles/Home.css";
import "./Styles/About.css";
import "./Styles/Projects.css";
import "./Styles/Contact.css";
import "./Styles/Sobre.css";

// import { Pages } from "./Components/Pages";
import {App} from "./Components/App"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter basename="/"> */}
      {/* <Pages /> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>
);
