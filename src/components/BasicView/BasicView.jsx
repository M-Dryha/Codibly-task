import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductsList from '../ProductsList';
import Filter from '../Filter';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c2185b',
      main: '#f06292',
      dark: '#f8bbd0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const BasicView = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Filter />
        <ProductsList />
      </ThemeProvider>
    </Container>
  );
};
export default BasicView;
