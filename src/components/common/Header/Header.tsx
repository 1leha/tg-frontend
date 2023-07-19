import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { AuthHeaderButton } from '../AuthHeaderButton';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TG task menager
          </Typography>
          <AuthHeaderButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
