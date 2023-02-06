import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import { TextField, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useGetProductsQuery } from '../../redux/myProductSlice';
import ProductsElement from '.././ProductsElement';
import { onChangeFilter } from '../../redux/myFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { data, error } = useGetProductsQuery();
  const idValue = useSelector(state => state.filter);
  const normalizedId = Number(idValue);

  const visibleProduct = data?.data.filter(d => d.id === normalizedId);

  useEffect(() => {
    if (data && normalizedId > data.total) {
      toast.error(`No data for id: ${normalizedId}`);
    }
  }, [data, normalizedId]);

  useEffect(() => {
    if (error) {
      toast.error(error.status, JSON.stringify(error.data));
    }
  }, [error]);

  const changeFilter = e => {
    const regex = /^[0-9\b]+$/;
    const regexNumber = regex.test(e.target.value);
    if (e.target.value === '' || regexNumber) {
      dispatch(onChangeFilter(e.target.value));
    }
    if (e.target.value !== '' && !regexNumber) {
      toast.error('Please, enter a valid number');
    }
  };

  return (
    <Box sx={{ width: 544, mr: 'auto', ml: 'auto', height: 200 }}>
      <TextField
        error
        label="Find product by id"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={idValue}
        onChange={changeFilter}
        sx={{ width: 544 }}
        helperText="Enter a number"
      />
      <Box sx={{ p: 3 }}>
        {!idValue && (
          <Box sx={{ width: 60, mr: 'auto', ml: 'auto' }}>
            <AutorenewTwoToneIcon sx={{ fontSize: 60, color: 'grey' }} />
          </Box>
        )}
        {data &&
          visibleProduct.map(({ id, name, year, color, pantone_value }) => (
            <ProductsElement
              key={id}
              id={id}
              name={name}
              year={year}
              color={color}
              pantone_value={pantone_value}
            />
          ))}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Filter;
