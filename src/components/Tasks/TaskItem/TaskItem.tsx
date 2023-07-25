import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  ITaskResponse,
  ITasksInput,
  TTaskValues,
} from '../../../helpers/interfaces/tasks';
import { formatDate } from '../../../helpers/formatDate';
import { TaskDeletePopup } from '../TaskDeletePopup';
import { TaskModal } from '../../common/TaskModal';
import { format } from 'date-fns';
import { useParams } from 'react-router';
import { UPDATE_TASK } from '../../../helpers/gql/mutations';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { toUpperFirstLetter } from '../../../helpers/toUpperFirsLetter';

interface IProps {
  task: ITaskResponse;
}

export const TaskItem = ({ task }: IProps) => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { categoryId } = useParams();

  const taskValues: TTaskValues = {
    name: task.name!,
    description: task.description!,
    startDate: format(new Date(String(task.dataStart!)), 'yyyy-MM-dd'),
    endDate: format(new Date(String(task.dataEnd!)), 'yyyy-MM-dd'),
  };

  const [updateTask, { error }] = useMutation(UPDATE_TASK, {
    refetchQueries: [
      {
        query: GET_TASK_BY_CATEGORY_ID,
        variables: { categoryId: Number(categoryId) },
      },
    ],
    onError() {
      toast.error(error?.message);
    },
  });

  const handleEditTask = async (formData: ITasksInput) => {
    await updateTask({
      variables: {
        task: {
          name: formData.name,
          description: formData.description,
          dataStart: new Date(formData.startDate),
          dataEnd: new Date(formData.endDate),
          id: Number(task.id),
        },
      },
    });
    setOpenEditModal(false);
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {task.category?.name}
          </Typography>

          <Typography variant="h5" component="div">
            {toUpperFirstLetter(task.name!)}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {toUpperFirstLetter(task.description!)}
          </Typography>

          <Box
            sx={{
              mt: 3,
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
          <Button size="small" onClick={() => setOpenDeletePopup(true)}>
            Delete
          </Button>
          <Button size="small" onClick={() => setOpenEditModal(true)}>
            Edit
          </Button>
        </CardActions>
      </Card>

      <TaskDeletePopup
        id={task.id!}
        isOpen={openDeletePopup}
        handleClose={() => setOpenDeletePopup(false)}
      />

      <TaskModal
        isOpen={openEditModal}
        initialValues={taskValues}
        handleClose={() => setOpenEditModal(false)}
        handleTaskAction={handleEditTask}
      />
    </>
  );
};
