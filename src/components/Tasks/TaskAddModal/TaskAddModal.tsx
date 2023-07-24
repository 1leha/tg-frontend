import Button from '@mui/material/Button';
import { useState } from 'react';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { TaskModal } from '../../common/TaskModal';
import { ITasks, TTaskValues } from '../../../helpers/interfaces/tasks';
import { formatDate } from '../../../helpers/formatDate';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../../helpers/gql/mutations';
import { useParams } from 'react-router';

export const TaskAddModal = () => {
  const { categoryId } = useParams();
  const [open, setOpen] = useState(false);
  const [inputError, setinputError] = useState(false);
  // const [categoryName, setCategoryName] = useState('');
  const { userId } = useAuth();

  const [createTask, { error }] = useMutation(CREATE_TASK, {
    onError() {
      toast.error(error?.message);
    },
  });

  // const [getTasksByCategoryId, { error }] = useMutation(CREATE_TASK, {
  //   refetchQueries: [
  //     { query: GET_USER_CATEGORIES, variables: { id: Number(userId) } },
  //   ],
  //   onError() {
  //     toast.error(error?.message);
  //   },
  // });

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
    // setCategoryName('');
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

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add task
      </Button>
      <TaskModal
        // isOpen={true}
        isOpen={open}
        initialValues={initialValues}
        handleClose={handleClose}
        handleTaskAction={handleAddTask}
      />
    </>
  );
};
