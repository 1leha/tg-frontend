import Button from '@mui/material/Button';
import { useState } from 'react';
import { TaskModal } from '../../common/TaskModal';
import { ITasks, TTaskValues } from '../../../helpers/interfaces/tasks';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../../helpers/gql/mutations';
import { useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';

export const TaskAddModal = () => {
  const { categoryId } = useParams();
  const [open, setOpen] = useState(false);

  const [createTask, { error }] = useMutation(CREATE_TASK, {
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

  const initialValues: TTaskValues = {
    name: '',
    description: '',
    startDate: format(Date.now(), 'yyyy-MM-dd'),
    endDate: format(Date.now(), 'yyyy-MM-dd'),
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log('handleClose');

    setOpen(false);
  };

  const handleAddTask = async (formData: ITasks) => {
    console.log('formData', formData);

    await createTask({
      variables: {
        task: {
          name: formData.name,
          description: formData.description,
          dataStart: new Date(formData.startDate),
          dataEnd: new Date(formData.endDate),
          categoryId: Number(categoryId),
        },
      },
    });
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add task
      </Button>
      <TaskModal
        isOpen={open}
        initialValues={initialValues}
        handleClose={handleClose}
        handleTaskAction={handleAddTask}
      />
    </>
  );
};
