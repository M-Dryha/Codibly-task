import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Container from '@mui/material/Container';
import Loader from './Loader';
const BasicView = lazy(() => import('./BasicView/BasicView'));

const styles = {
  Container: {
    background: 'linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db)',
    pt: '20px',
  },
};

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }} style={styles.Container}>
        <Routes>
          <Route path="/" element={<BasicView />} />
        </Routes>
      </Container>
    </Suspense>
  );
};
