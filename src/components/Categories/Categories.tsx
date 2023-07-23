import { Box, Button, Typography } from '@mui/material';
import { CategoryList } from './CategoryList';

export const Categories = () => {
  // const loc = useLocation();
  // console.log('loc', loc);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: '100%',
          justifyContent: 'end',
        }}
      >
        {/* <Typography sx={{ flexGrow: 1 }}>1</Typography> */}
        <Button variant="contained" sx={{}}>
          Add category
        </Button>
      </Box>

      <CategoryList />
    </Box>
  );
};
