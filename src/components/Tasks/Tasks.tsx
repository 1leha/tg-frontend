import { Box, Button, Typography } from '@mui/material';
import { TaskList } from './TaskList';
import { useLocation } from 'react-router';

export const Tasks = () => {
  const { state } = useLocation();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Typography component="span" sx={{ flexGrow: 1 }}>
          {state?.category.name}
        </Typography>
        <Button>Add task</Button>
      </Box>
      <TaskList />
    </>
  );
};
