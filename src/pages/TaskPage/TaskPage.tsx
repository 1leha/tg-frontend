import { useQuery } from '@apollo/client';
import { Outlet } from 'react-router';
import { GET_ALL_CATEGORIES } from '../../helpers/gql/queries';

export const TaskPage = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  return (
    <>
      {/* <div>TaskPage</div> */}
      <Outlet />
    </>
  );
};
