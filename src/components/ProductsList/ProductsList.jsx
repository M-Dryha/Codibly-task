// import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
// import { Grid } from '@mui/material';
import { useGetProductsByPaginationQuery } from '../../redux/myProductSlice';
import ProductsElement from '.././ProductsElement';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productPage = searchParams.get('page') ?? '';

  const [pages, setPages] = useState(1);
  const { data: products, isLoading } =
    useGetProductsByPaginationQuery(productPage);
  const checkPages = products && pages === products.total_pages;
  if (checkPages) {
    toast.error('There is no data');
  }
  useEffect(() => {
    const updateQueryString = page => {
      const nextParams = page !== '' ? { page } : {};
      setSearchParams(nextParams);
    };
    updateQueryString(pages);
  }, [pages, setSearchParams]);

  return (
    <>
      <section>
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
        </ul>
        <div>
          <button onClick={() => setPages(pages + 1)} disabled={checkPages}>
            Вперед
          </button>
        </div>
        <div>
          <button onClick={() => setPages(pages - 1)} disabled={pages === 1}>
            Назад
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
};

export default ProductsList;
