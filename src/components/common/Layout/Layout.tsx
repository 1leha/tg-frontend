import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import {
  // AppBar,
  Box,
  // Button,
  Container,
  // Toolbar,
  // Typography,
  Paper,
} from '@mui/material';

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
