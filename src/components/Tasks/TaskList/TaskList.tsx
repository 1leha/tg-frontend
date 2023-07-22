import { useLocation, useParams } from 'react-router';

export const TaskList = () => {
  const params = useParams();
  const { state } = useLocation();

  console.log('params', params);
  console.log('state', state);

  return state && <div>TaskList for {state?.category.name}</div>;
};
