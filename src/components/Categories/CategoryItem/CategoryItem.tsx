import { ICategory, IData } from '../../../helpers/interfaces/categories';
import { format } from 'date-fns';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';
import { CategoryActions } from '../CategoryActions';

export const CategoryItem = ({ data }: IData) => {
  const navigate = useNavigate();
  const createdData = format(
    Date.parse(String(data.dataCreated)),
    'dd.MM.yyyy'
  );
  // console.log('data', data);
  // console.log('data', Date.parse(String(data.dataCreated)));
  // console.log('data', format(Date.parse(data.dataCreated), 'dd.MM.yyyy'));

  const handlerCategoryClick = (data: ICategory) => {
    // console.log('You clicked by: ', data.name);
    navigate(`${data.id}`, { state: { category: data } });
  };

  return (
    <ListItem
      sx={{ mb: 2 }}
      // disableGutters
      secondaryAction={
        <Box sx={{ display: 'flex', gap: 2 }}>
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
          pr: 120,
        }}
        onClick={() => handlerCategoryClick(data)}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 4, maxWidth: '75%' }}>
          <Typography sx={{ minWidth: '60px', flexGrow: 1, flexBasis: '50%' }}>
            {data.name}
          </Typography>
          <Typography sx={{ minWidth: '40px', flexGrow: 1, flexBasis: '20%' }}>
            {data.tasks?.length} {data.tasks?.length === 1 ? 'task' : 'tasks'}
          </Typography>
          <Typography sx={{ minWidth: '60px', flexGrow: 0, flexBasis: '30%' }}>
            {createdData}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

// <li
//   key={category.id}
//   onClick={() => handlerCategoryClick(category)}
// >
//   <Paper sx={{ p: 2, m: 0 }}>{category.name}</Paper>
// </li>;
