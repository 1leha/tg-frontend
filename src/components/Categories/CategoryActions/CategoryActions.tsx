import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IData } from '../../../helpers/interfaces/categories';

import { CategoryEditPopup } from '../CategoryEditPopup';
import { useState } from 'react';
import { CategoryDeletePopup } from '../CategoryDeletePopup';

export const CategoryActions = ({ data }: IData) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  const open = Boolean(anchorEl);

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
    setAnchorEl(null);
    setOpenDeletePopup(true);
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

      <CategoryEditPopup
        data={data}
        isOpen={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      />

      <CategoryDeletePopup
        id={data.id!}
        isOpen={openDeletePopup}
        handleClose={() => setOpenDeletePopup(false)}
      />
    </div>
  );
};
