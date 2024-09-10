import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function ContainedButtons() {
  const { Language } = useContext(UserContext);

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="https://github.com/gab9244" target='_blank' id='More'>
      {Language ?(
        "More"
      ):(
      "Mais"
      )}
        
      </Button>
    </Stack>
  );
}