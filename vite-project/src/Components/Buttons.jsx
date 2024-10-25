import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function ContainedButtons({link}) {
  const { Language } = useContext(UserContext);

  return (
      <Link to = {link} className="MoreBtns">
      {Language ?(
        "More"
      ):(
      "Mais"
      )}
      </Link>
  );
}