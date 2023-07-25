import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { AuthHeaderButton } from '../AuthHeaderButton';
import { useAuth } from '../../../helpers/hooks/useAuth';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = () => {
  const { email, isLoggedIn } = useAuth();
  const isMw400 = useMediaQuery('(max-width:400px)');

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TG task menager
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {isLoggedIn && !isMw400 && (
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
