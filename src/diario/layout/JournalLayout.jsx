import { Stack } from "@mui/system";
import {NavBar} from "../components";

const JournalLayout = ({ children }) => {
  return (
    <Stack>
      <Stack>
        <NavBar />
      </Stack>
        
      <Stack sx={{flexGrow:1,p: 3}}>
        {children}
      </Stack>
    </Stack>
  );
};

export default JournalLayout;
