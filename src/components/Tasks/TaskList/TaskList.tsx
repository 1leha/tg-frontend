import { useLazyQuery, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { GET_TASK_BY_CATEGORY_ID } from '../../../helpers/gql/queries';
import { toast } from 'react-toastify';
import { Paper } from '@mui/material';
import { ITaskResponse } from '../../../helpers/interfaces/tasks';
import { TaskItem } from '../TaskItem';

export const TaskList = () => {
  const { categoryId } = useParams();

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
      {!loading && !error && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {data.tasks
            .map((task: ITaskResponse) => (
              <li key={task.id} style={{ margin: 0, padding: 0 }}>
                <TaskItem task={task} />
              </li>
            ))
            .toSorted((a: React.ReactElement, b: React.ReactElement) => {
              const dataA = Number(a.key);
              const dataB = Number(b.key);
              return dataB - dataA;
            })}
        </ul>
      )}
    </>
  );
};
