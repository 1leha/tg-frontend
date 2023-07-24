import { Box } from '@mui/material';
import { CategoryList } from './CategoryList';
import { CategoryModal } from '../common/CategoryModal';

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
        <CategoryModal type="add" />
      </Box>

      <CategoryList />
    </Box>
  );
};
