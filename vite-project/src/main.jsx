import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./Styles/index.css";
import "./Styles/Header.css";
import "./Styles/Home.css";
import "./Styles/About.css";
import "./Styles/Projects.css";
import "./Styles/Contact.css";
import "./Styles/Sobre.css";

import { Pages } from "./Components/Pages";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Pages />
  </StrictMode>
);
