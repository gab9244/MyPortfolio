//Neste componente lidaremos com os páginas do site
import { Routes, Route } from "react-router-dom";
import {Layout} from "./Layout"
import { MoreProjects } from "./MoreProjects";
import { App } from "./App";
import { UserProvider } from "./UserContext";
import { Sobre } from "./Sobre";
import { BrowserRouter } from "react-router-dom";


export const Pages = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element = {< App/>} />
            <Route path="/" element ={<Layout/>}>
                    <Route path="/MoreProjects" element ={<MoreProjects/>}/>
                    <Route path="/Sobre" element = {<Sobre/>}/>
            </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}
