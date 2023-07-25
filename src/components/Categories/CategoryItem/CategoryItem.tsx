import { ICategory, IData } from '../../../helpers/interfaces/categories';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useLocation, useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';
import { CategoryActions } from '../CategoryActions';
import { toUpperFirstLetter } from '../../../helpers/toUpperFirsLetter';
import { formatDate } from '../../../helpers/formatDate';
import useMediaQuery from '@mui/material/useMediaQuery';

export const CategoryItem = ({ data }: IData) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMw600 = useMediaQuery('(max-width:600px)');

  const createdData = formatDate(data.dataCreated!);

  const handlerCategoryClick = (data: ICategory) => {
    navigate(`${data.id}`, { state: { category: data, from: location } });
  };

  const categoryName = toUpperFirstLetter(data.name!);

  return (
    <ListItem
      sx={{ mb: 2 }}
      secondaryAction={
        <Box sx={{ display: 'flex', gap: 0 }}>
          <CategoryActions data={data} />
          <Button onClick={() => handlerCategoryClick(data)}>More</Button>
        </Box>
      }
      disablePadding
    >
      <ListItemButton
        sx={{
          bgcolor: 'grey.50',
          borderRadius: 2,
          flexGrow: 1,
          p: 2,
        }}
        onClick={() => handlerCategoryClick(data)}
      >
        <Box
          sx={
            isMw600
              ? {
                  flexGrow: 1,
                  display: 'flex',
                  gap: 0,
                  flexDirection: 'column',
                  maxWidth: '70%',
                }
              : {
                  flexGrow: 1,
                  display: 'flex',
                  gap: 2,
                  maxWidth: '75%',
                }
          }
        >
          <Typography sx={{ minWidth: '50px', flexGrow: 1, flexBasis: '40%' }}>
            {categoryName}
          </Typography>
          <Typography sx={{ minWidth: '50px', flexGrow: 1, flexBasis: '30%' }}>
            {data.tasks?.length} {data.tasks?.length === 1 ? 'task' : 'tasks'}
          </Typography>
          <Typography sx={{ minWidth: '60px', flexGrow: 1, flexBasis: '30%' }}>
            {createdData}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
