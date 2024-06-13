import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./componentes/Header.css";
import "./componentes/Home.css";
import "./componentes/About.css";
import "./componentes/Projects.css";
import "./componentes/Contact.css";

import { Header } from "./componentes/Header";
import { Home } from "./componentes/Home";
import { About } from "./componentes/About";
import { Projects } from "./componentes/Projects";
import { Contact } from "./componentes/Contact";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
);
