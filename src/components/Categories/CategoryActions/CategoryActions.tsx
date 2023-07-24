import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IData } from '../../../helpers/interfaces/categories';
import { useMutation } from '@apollo/client';
import { DELETE_CATEGORY } from '../../../helpers/gql/mutations';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { CategoryEditModal } from '../CategoryEditModal';
import { useState } from 'react';

export const CategoryActions = ({ data }: IData) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const open = Boolean(anchorEl);
  const { userId } = useAuth();

  const [deleteCategory, { error }] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [
      { query: GET_USER_CATEGORIES, variables: { id: Number(userId) } },
    ],
    onError() {
      toast.error(error?.message);
    },
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    setOpenEditModal(true);
  };

  const handleDelete = (id: number) => {
    deleteCategory({ variables: { id: Number(id) } });
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={() => handleDelete(data.id!)}>Delete</MenuItem>
      </Menu>
      <CategoryEditModal
        data={data}
        isOpen={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      />
    </div>
  );
};
