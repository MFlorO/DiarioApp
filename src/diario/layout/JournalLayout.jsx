import { Stack } from "@mui/system";

const JournalLayout = ({ children }) => {
  return (
    <Stack >
      <Stack sx={{flexGrow:1,p: 3}}>
        {children}
      </Stack>
    </Stack>
  );
};

export default JournalLayout;
