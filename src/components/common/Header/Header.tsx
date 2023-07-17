import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TG task menager
          </Typography>
          <Box>
            <Button color="inherit" component={NavLink} to={'login'}>
              Login
            </Button>
            <Button color="inherit" component={NavLink} to={'register'}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
