import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_CATEGORY } from '../../../helpers/gql/mutations';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
import { IData } from '../../../helpers/interfaces/categories';

export const CategoryEditModal = ({ data }: IData) => {
  const [open, setOpen] = useState(false);
  const [inputError, setinputError] = useState(false);
  const [categoryName, setCategoryName] = useState(data?.name ?? '');
  const { userId } = useAuth();

  const [updateCategoty, { error }] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [
      { query: GET_USER_CATEGORIES, variables: { id: Number(userId) } },
    ],
    onError() {
      toast.error(error?.message);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
    console.log('data', data);
    setCategoryName(data?.name ?? '');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateCategory = () => {
    if (data?.name && categoryName.length < 1) {
      setinputError(true);
      return;
    }
    updateCategoty({
      variables: {
        fields: { id: Number(data.id), name: String(categoryName) },
      },
    });

    setCategoryName('');
    setOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value.trim());

    if (categoryName.length < 0) {
      setinputError(true);
      return;
    }
    setinputError(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, change the category name:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Input category's name"
            type="text"
            fullWidth
            variant="standard"
            value={categoryName}
            onChange={handleChange}
            error={inputError}
            helperText={inputError && 'You have to input the name!'}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateCategory} disabled={inputError}>
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
