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

// interface IData {
//   key: 'edit' | 'add';
// }

interface IModalType {
  type: 'edit' | 'add';
}

interface IProps extends IModalType {
  data?: any;
  toggleModal?: void;
  isModalOpen?: boolean;
}

export const CategoryModal = ({ type, data, isModalOpen }: IProps) => {
  console.log('type', type);
  const [open, setOpen] = useState(isModalOpen ? true : false);
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

  console.log('isModalOpen', isModalOpen);

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
    switch (type) {
      case 'edit':
        break;

      default:
        createCategory({
          variables: {
            category: { name: String(categoryName), userId: Number(userId) },
          },
        });
        break;
    }

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
      {type === 'add' && (
        <Button variant="outlined" onClick={handleClickOpen}>
          Add category
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {type === 'add' ? 'Add category' : 'Edit category'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {type === 'add'
              ? 'Please, input a new category name:'
              : 'Please, change the category name:'}
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
            {type === 'add' ? 'Add' : 'Change'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
