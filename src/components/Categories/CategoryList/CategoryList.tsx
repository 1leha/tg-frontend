import { List } from '@mui/material';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { ICategory } from '../../../helpers/interfaces/categories';
import { CategoryItem } from '../CategoryItem';
import { useQuery } from '@apollo/client';

export const CategoryList = () => {
  // const loc = useLocation();
  // console.log('loc', loc);

  const { userId } = useAuth();

  const { data, loading, error } = useQuery(GET_USER_CATEGORIES, {
    variables: { id: Number(userId) },
    fetchPolicy: 'network-only',
  });

  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  // console.log('data', data);
  // console.log('loading', loading);
  // console.log('error', error);
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

  return (
    <>
      {!loading && !error && (
        <>
          <List sx={{ width: '100%' }}>
            {data.categories
              .map((category: ICategory) => (
                <CategoryItem key={Number(category.id)} data={category} />
              ))
              .toSorted((a: React.ReactElement, b: React.ReactElement) => {
                const dataA = Date.parse(a.props.data.dataCreated);
                const dataB = Date.parse(b.props.data.dataCreated);
                return dataB - dataA;
              })}
          </List>
        </>
      )}
    </>
  );
};
