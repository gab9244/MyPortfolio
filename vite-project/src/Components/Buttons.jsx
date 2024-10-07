import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function ContainedButtons({link}) {
  const { Language } = useContext(UserContext);

  return (
      <Button variant="contained" href={link} target='_blank' id='More'>
      {Language ?(
        "More"
      ):(
      "Mais"
      )}
      </Button>
  );
}