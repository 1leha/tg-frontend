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
      <Box sx={{ display: 'flex' }}>
        <Typography component="span" sx={{ flexGrow: 1 }}>
          {categoryName}
        </Typography>
        <TaskAddModal />
      </Box>
      <TaskList />
    </>
  );
};
