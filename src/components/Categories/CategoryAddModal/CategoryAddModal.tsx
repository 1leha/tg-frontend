import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CATEGORY } from '../../../helpers/gql/mutations';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';

export const CategoryAddModal = () => {
  const [open, setOpen] = useState(false);
  const [inputError, setinputError] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const { userId } = useAuth();

  const [createCategory, { error }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [
      { query: GET_USER_CATEGORIES, variables: { id: Number(userId) } },
    ],
    onError() {
      toast.error(error?.message);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCategoryName('');

    setOpen(false);
  };

  const handleAddCategory = () => {
    if (categoryName.length < 1) {
      setinputError(true);
      return;
    }
    createCategory({
      variables: {
        category: { name: String(categoryName), userId: Number(userId) },
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
        Add category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, input a new category name:
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
          <Button onClick={handleAddCategory} disabled={inputError}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
