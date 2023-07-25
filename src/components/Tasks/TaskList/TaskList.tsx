import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
import { ITaskResponse } from '../../../helpers/interfaces/tasks';
import { TaskItem } from '../TaskItem';
import { Grid } from '@mui/material';

export const TaskList = () => {
  const { categoryId } = useParams();

  const { data, loading, error } = useQuery(GET_TASK_BY_CATEGORY_ID, {
    variables: {
      categoryId: Number(categoryId),
      fetchPolicy: 'network-only',
      onError() {
        toast.error(error?.message);
      },
    },
  });

  return (
    <>
      {!loading && !error && (
        <>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {data.tasks
              .map((task: ITaskResponse) => (
                <Grid key={task.id} item xs={12} sm={12} md={6} lg={4}>
                  <TaskItem task={task} />
                </Grid>
              ))
              .toSorted((a: React.ReactElement, b: React.ReactElement) => {
                const dataA = Number(a.key);
                const dataB = Number(b.key);
                return dataB - dataA;
              })}
          </Grid>
        </>
      )}
    </>
  );
};
