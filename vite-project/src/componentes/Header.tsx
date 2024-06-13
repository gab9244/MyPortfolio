import { useState } from "react";

export const Header = () => {
  const [Check, setCheck] = useState(false);

  const Triggerd = () => {
    const hamburgerM = document.querySelector(".hamburger-menu");
    const Opacity = document.querySelector(".Opacity");
    const sidebar = document.querySelector(".sidebar");
    const CheckBox = document.querySelector(".CheckBox")
    if (Check == false) {
      Opacity?.classList.add("Checked");
      sidebar?.classList.add("XBox");
      sidebar?.classList.add("PhoneStyle");
      CheckBox?.classList.add("removed")
      hamburgerM?.classList.add("IsChecked");
      hamburgerM?.setAttribute("checked", "true");

      setCheck(true);
    }
    if (Check == true) {
      Opacity?.classList.remove("Checked");
      sidebar?.classList.remove("XBox");
      sidebar?.classList.remove("PhoneStyle");
      CheckBox?.classList.remove("removed")
      hamburgerM?.classList.remove("IsChecked");
      hamburgerM?.setAttribute("checked", "false");

      setCheck(false);
    }
  };

  return (
    <>
      <>
        <div className="Opacity"></div>
      </>
      <header className="Header">
        <label className="hamburger-menu" onChange={Triggerd}>
          <input type="checkbox" className="CheckBox" />
        </label>
        <span id="links" className="sidebar">
          <div id="HomeNavegator">
            <a href="#home" onClick={Triggerd} className="MenuLink">
              Home
            </a>
          </div>
          <div id="AboutNavegator">
            <a href="#About" onClick={Triggerd} className="MenuLink">
              About
            </a>
          </div>
          <div id="ProjectsNavegator">
            <a href="#Projects" onClick={Triggerd} className="MenuLink">
              Projects
            </a>
          </div>
          <div id="ContactNavegator">
            <a href="#Contact" onClick={Triggerd} className="MenuLink">
              Contact
            </a>
          </div>
        </span>
      </header>
    </>
  );
};
