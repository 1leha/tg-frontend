import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { AuthHeaderButton } from '../AuthHeaderButton';
import { useAuth } from '../../../helpers/hooks/useAuth';

export const Header = () => {
  const { email, isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TG task menager
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {isLoggedIn && (
              <Typography component="span" sx={{ flexGrow: 1, fontSize: 14 }}>
                {email}
              </Typography>
            )}
            <AuthHeaderButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
