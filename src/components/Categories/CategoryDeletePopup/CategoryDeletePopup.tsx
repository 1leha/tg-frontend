import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DELETE_CATEGORY } from '../../../helpers/gql/mutations';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { toast } from 'react-toastify';

interface IProps {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
}

export const CategoryDeletePopup = ({ id, isOpen, handleClose }: IProps) => {
  const { userId } = useAuth();

  const [deleteCategory, { error }] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [
      { query: GET_USER_CATEGORIES, variables: { id: Number(userId) } },
    ],
    onError() {
      toast.error(error?.message);
    },
  });

  const handleDelete = (id: number) => {
    deleteCategory({ variables: { id: Number(id) } });
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
          Do you want delete this category?
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
