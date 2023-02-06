import { Typography } from '@mui/material';

const ModalBox = ({ id, name, color, year, pantone_value }) => {
  return (
    <>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography variant="span" sx={{ fontWeight: 'bold' }}>
          id:{' '}
        </Typography>
        {id}
      </Typography>
      <Typography>
        {' '}
        <Typography sx={{ margin: 0, padding: '10px' }}>
          <Typography variant="span" sx={{ fontWeight: 'bold' }}>
            name:{' '}
          </Typography>{' '}
          {name}
        </Typography>{' '}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography variant="span" sx={{ fontWeight: 'bold' }}>
          year:{' '}
        </Typography>
        {year}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography variant="span" sx={{ fontWeight: 'bold' }}>
          color:{' '}
        </Typography>
        {color}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography variant="span" sx={{ fontWeight: 'bold' }}>
          pantone_value:{' '}
        </Typography>
        {pantone_value}
      </Typography>
    </>
  );
};

export default ModalBox;
