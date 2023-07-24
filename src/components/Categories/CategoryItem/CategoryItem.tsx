import { ICategory, IData } from '../../../helpers/interfaces/categories';
import { format } from 'date-fns';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';
import { CategoryActions } from '../CategoryActions';
import { toUpperFirstLetter } from '../../../helpers/toUpperFirsLetter';
import { formatDate } from '../../../helpers/formatDate';

export const CategoryItem = ({ data }: IData) => {
  const navigate = useNavigate();

  const createdData = formatDate(data.dataCreated!);

  const handlerCategoryClick = (data: ICategory) => {
    navigate(`${data.id}`, { state: { category: data } });
  };

  const categoryName = toUpperFirstLetter(data.name!);
  console.log('categoryName', categoryName);

  return (
    <ListItem
      sx={{ mb: 2 }}
      secondaryAction={
        <Box sx={{ display: 'flex', gap: 1 }}>
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
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 4, maxWidth: '75%' }}>
          <Typography sx={{ minWidth: '60px', flexGrow: 1, flexBasis: '50%' }}>
            {categoryName}
          </Typography>
          <Typography sx={{ minWidth: '50px', flexGrow: 1, flexBasis: '20%' }}>
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
