import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { taskValidation } from '../../../helpers/validation/taskValidation';
import { TaskModal } from '../../common/TaskModal';
import { TTaskValues } from '../../../helpers/interfaces/tasks';

export const TaskAddModal = () => {
  const [open, setOpen] = useState(false);
  const [inputError, setinputError] = useState(false);
  // const [categoryName, setCategoryName] = useState('');
  const { userId } = useAuth();

  // const [createCategory, { error }] = useMutation(CREATE_CATEGORY, {
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
    startDate: new Date(),
    endDate: new Date(),
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setCategoryName('');
    console.log('handleClose');

    setOpen(false);
  };

  const handleAddTask = () => {
    console.log('handleAddTask');
    // createCategory({
    //   variables: {
    //     category: { name: String(categoryName), userId: Number(userId) },
    //   },
    // });

    setOpen(false);
  };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

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
      {/* <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleAddTask}
          validationSchema={taskValidation}
        >
          <Form>
            <DialogTitle>Add category</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleAddTask}>
                Save
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog> */}
    </>
  );
};
