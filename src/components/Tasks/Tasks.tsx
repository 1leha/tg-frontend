import { Box, Button, Typography } from '@mui/material';
import { TaskList } from './TaskList';
import { useLocation } from 'react-router';
import { toUpperFirstLetter } from '../../helpers/toUpperFirsLetter';

export const Tasks = () => {
  const { state } = useLocation();
  const categoryName = toUpperFirstLetter(state.category.name);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Typography component="span" sx={{ flexGrow: 1 }}>
          {categoryName}
        </Typography>
        <Button>Add task</Button>
      </Box>
      <TaskList />
    </>
  );
};
