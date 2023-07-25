import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DELETE_TASK } from '../../../helpers/gql/mutations';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';

interface IProps {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
}

export const TaskDeletePopup = ({ id, isOpen, handleClose }: IProps) => {
  const { categoryId } = useParams();

  const [deleteTask, { error }] = useMutation(DELETE_TASK, {
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

  const handleDelete = (id: number) => {
    deleteTask({ variables: { taskId: Number(id) } });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={() => handleDelete(id)} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
