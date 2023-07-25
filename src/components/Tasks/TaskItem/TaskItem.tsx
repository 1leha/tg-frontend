import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ITaskResponse } from '../../../helpers/interfaces/tasks';
import { formatDate } from '../../../helpers/formatDate';

interface IProps {
  task: ITaskResponse;
}

export const TaskItem = ({ task }: IProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 325 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task.category?.name}
        </Typography>

        <Typography variant="h5" component="div">
          {task.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="body2">
            Start date: {formatDate(task.dataStart!)}
          </Typography>
          <Typography variant="body2">
            End date: {formatDate(task.dataEnd!)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};
