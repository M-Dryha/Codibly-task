import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const Link = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  color: white;
  margin-right: 30px;
  &.active {
    background-color: #f8bbd0;
    border-radius: 5px;
  }
`;
const Navigate = styled.nav`
  display: flex;
`;

const Navigation = () => {
  return (
    <Navigate>
      <Link to="/">
        <Button type="submit" variant="contained" size="medium">
          Home
        </Button>
      </Link>
      <Link to="/products">
        <Button type="submit" variant="contained" size="medium">
          Products
        </Button>
      </Link>
    </Navigate>
  );
};

export default Navigation;
