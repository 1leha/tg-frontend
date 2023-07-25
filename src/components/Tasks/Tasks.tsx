import { Box, IconButton, Typography } from '@mui/material';
import { TaskList } from './TaskList';
import { useLocation, useNavigate } from 'react-router';
import { toUpperFirstLetter } from '../../helpers/toUpperFirsLetter';
import { TaskAddModal } from './TaskAddModal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Tasks = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const categoryName = toUpperFirstLetter(state.category.name);

  const handleBack = () => {
    navigate(state.from);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton aria-label="back" onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography component="p" variant="h5" sx={{ flexGrow: 1 }}>
          {categoryName}
        </Typography>
        <TaskAddModal />
      </Box>
      <TaskList />
    </>
  );
};
