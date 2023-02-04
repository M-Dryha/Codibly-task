import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import TextField from '@mui/material/TextField';
import { useGetProductsQuery } from '../../redux/myProductSlice';
import ProductsElement from '.././ProductsElement';
// import s from './Filter.module.css';
import { onChangeFilter } from '../../redux/myFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();
  const idValue = useSelector(state => state.filter);
  const normalizedId = Number(idValue);
  const visibleProduct = data?.data.filter(d => d.id === normalizedId);

  // const test = data?.data;

  const changeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <TextField
        label="Find product by id"
        type="number"
        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        variant="filled"
        value={idValue}
        onChange={changeFilter}
        sx={{ width: 400 }}
      />
      <ul>
        {isLoading && (
          <ThreeCircles
            height="50"
            width="50"
            color="violet"
            outerCircleColor="grey"
            middleCircleColor="violet"
            innerCircleColor="grey"
          />
        )}
        {data &&
          visibleProduct.map(({ id, name, year }) => (
            <ProductsElement key={id} id={id} name={name} year={year} />
          ))}
      </ul>
    </div>
  );
};

export default Filter;
// className={s.field}
