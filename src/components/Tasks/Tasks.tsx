import { Box, Typography } from '@mui/material';
import { TaskList } from './TaskList';
import { useLocation } from 'react-router';
import { toUpperFirstLetter } from '../../helpers/toUpperFirsLetter';
import { TaskAddModal } from './TaskAddModal';

export const Tasks = () => {
  const { state } = useLocation();
  const categoryName = toUpperFirstLetter(state.category.name);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="p" variant="h5" sx={{ flexGrow: 1 }}>
          {categoryName}
        </Typography>
        <TaskAddModal />
      </Box>
      <TaskList />
    </>
  );
};
