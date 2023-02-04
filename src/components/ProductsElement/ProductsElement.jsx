// import Modal from '../Modal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useState } from 'react';

const ProductsElement = ({ id, name, year, color, pantone_value }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: `${color}`,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <li>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>year: {year}</p>

      <button onClick={handleOpen}>View</button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>year: {year}</p>
          <p>color: {color}</p>
          <p>pantone_value: {pantone_value}</p>
        </Box>
      </Modal>
    </li>
  );
};
export default ProductsElement;
