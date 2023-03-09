import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";
import AddIcon from '@mui/icons-material/Add';

const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddIcon sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
};

export default JournalPage;
