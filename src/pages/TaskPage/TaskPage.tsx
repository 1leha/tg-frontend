import { Outlet } from 'react-router';
import { Container } from '@mui/material';

export const TaskPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
