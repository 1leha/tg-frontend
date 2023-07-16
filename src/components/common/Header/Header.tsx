import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TG task manager
          </Typography>
          <Box>
            <Button color="inherit" variant="text">
              Login
            </Button>
            <Button color="inherit" variant="text">
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
