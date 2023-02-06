import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useGetProductsByPaginationQuery } from '../../redux/myProductSlice';
import ProductsElement from '.././ProductsElement';
import Loader from '.././Loader';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const [pages, setPages] = useState(currentPage === null ? 1 : +currentPage);
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByPaginationQuery(pages);
  console.log(useGetProductsByPaginationQuery());
  const checkPages = products && pages === products.total_pages;

  useEffect(() => {
    if (currentPage !== pages) {
      setSearchParams({
        page: pages,
      });
    }
  }, [pages, currentPage, setSearchParams]);

  useEffect(() => {
    if (checkPages) {
      toast.error('There is no data');
    }
  }, [checkPages]);

  useEffect(() => {
    if (error) {
      toast.error(error.status, JSON.stringify(error.data));
    }
  }, [error]);

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: '30px' }}>
          {isLoading && <Loader />}
          {products &&
            products.data.map(({ id, name, year, color, pantone_value }) => (
              <ProductsElement
                key={id}
                id={id}
                name={name}
                year={year}
                color={color}
                pantone_value={pantone_value}
              />
            ))}
        </Grid>
        <Box sx={{ display: 'flex', mr: 'auto', ml: 'auto', width: 100 }}>
          <Box sx={{ mr: '20px' }}>
            <Button
              variant="contained"
              onClick={() => setPages(pages - 1)}
              disabled={pages === 1}
            >
              <KeyboardArrowLeftIcon />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => setPages(pages + 1)}
              disabled={checkPages}
            >
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Box>
        <ToastContainer />
      </Box>
    </>
  );
};

export default ProductsList;
