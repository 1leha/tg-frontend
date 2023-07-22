import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { Paper } from '@mui/material';

interface ITask {
  id?: number;
  name?: string;
  dataStart?: Date;
  dataEnd?: Date;
  categoryId?: number;
}

export const TaskList = () => {
  const { categoryId } = useParams();
  const { state } = useLocation();
  const { email } = useAuth();

  const [tasks, settasks] = useState([]);

  const [getTasksByCategoryId, { data, loading, error }] = useLazyQuery(
    GET_TASK_BY_CATEGORY_ID
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await getTasksByCategoryId({
          variables: { categoryId: Number(categoryId) },
        });
        settasks(response.data.tasks);
        // console.log('response', response.data.tasks);
      } catch (err) {
        if (error) toast.error('Request error');
      }
    })();
  }, [categoryId, error, getTasksByCategoryId]);

  console.log('catecoryId', categoryId);
  // console.log('state ', state);

  return (
    state && (
      <>
        {!loading && data && (
          <>
            <div>
              TaskList for {state?.category.name} of user: {email}
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {tasks.map((task: ITask) => (
                <li key={task.id}>
                  <Paper sx={{ p: 2, m: 1 }}>{task.name}</Paper>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    )
  );
};
