
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { UserProvider } from "./UserContext";
export const App = () => {
  return (
    <UserProvider>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </UserProvider>
  )
}
