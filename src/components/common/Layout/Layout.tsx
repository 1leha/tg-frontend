import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

export const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <main>
        <Container fixed>
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};
