import { useQuery } from '@apollo/client';
import { Outlet } from 'react-router';
import { GET_ALL_CATEGORIES } from '../../helpers/gql/queries';
import { Container } from '@mui/material';

export const TaskPage = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  return (
    <Container>
      {/* <div>TaskPage</div> */}
      <Outlet />
    </Container>
  );
};
