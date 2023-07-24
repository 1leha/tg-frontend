import { useLazyQuery, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
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

  // const { state } = useLocation();

  // const loc = useLocation();
  // console.log('loc', loc);

  // const [tasks, settasks] = useState([]);

  // const [getTasksByCategoryId, { data, loading, error }] = useLazyQuery(
  //   GET_TASK_BY_CATEGORY_ID
  // );

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       if (categoryId) {
  //         console.log('categoryId', categoryId);
  //         const response = await getTasksByCategoryId({
  //           variables: { categoryId: Number(categoryId) },
  //         });
  //         settasks(response.data.tasks);
  //       }
  //     } catch (err) {
  //       if (error && !categoryId) toast.error('Request error');
  //     }
  //   })();
  // }, [categoryId, error, getTasksByCategoryId]);

  const { data, loading, error } = useQuery(GET_TASK_BY_CATEGORY_ID, {
    variables: {
      categoryId: Number(categoryId),
      fetchPolicy: 'network-only',
      onError() {
        toast.error('TaskList');
      },
    },
  });

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

  return (
    <>
      <p>TaskList</p>
      {!loading && !error && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {data.tasks
            .map((task: ITask) => (
              <li key={task.id} style={{ margin: 0, padding: 0 }}>
                <Paper sx={{ p: 2, m: 1 }}>{task.name}</Paper>
              </li>
            ))
            .toSorted()}
        </ul>
      )}
    </>
  );
};
