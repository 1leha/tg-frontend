import { Outlet } from 'react-router';
import { Container } from '@mui/material';

export const TaskPage = () => {
  return (
    <Container>
      TaskPage
      <Outlet />
    </Container>
  );
};
