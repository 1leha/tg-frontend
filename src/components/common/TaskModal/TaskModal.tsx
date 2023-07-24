import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import { taskValidation } from '../../../helpers/validation/taskValidation';
import { TTaskValues } from '../../../helpers/interfaces/tasks';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  handleTaskAction: () => void;
  initialValues: TTaskValues;
}

export const TaskModal = ({
  isOpen,
  handleClose,
  initialValues,
  handleTaskAction,
}: IProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleTaskAction}
        validationSchema={taskValidation}
      >
        <Form>
          <DialogTitle>Add category</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleTaskAction}>
              Save
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
