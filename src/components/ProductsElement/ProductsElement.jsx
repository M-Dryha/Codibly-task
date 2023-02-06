import Modal from '@mui/material/Modal';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import ModalBox from '.././ModalBox';

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
    <Grid item xs={6}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: `${color}`,
          '&:hover': {
            boxShadow:
              'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)',
          },
        }}
        onClick={handleOpen}
      >
        <CardContent>
          <Typography sx={{ display: 'flex', margin: 0, padding: '10px' }}>
            <Typography variant="span" sx={{ fontWeight: 'bold' }}>
              id:
            </Typography>
            {id}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ margin: 0, padding: '10px' }}>
            <Typography variant="span" sx={{ fontWeight: 'bold' }}>
              name:{' '}
            </Typography>{' '}
            {name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ margin: 0, padding: '10px' }}>
            <Typography variant="span" sx={{ fontWeight: 'bold' }}>
              year:{' '}
            </Typography>{' '}
            {year}
          </Typography>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ModalBox
            id={id}
            name={name}
            year={year}
            color={color}
            pantone_value={pantone_value}
          />
        </Box>
      </Modal>
    </Grid>
  );
};
export default ProductsElement;
