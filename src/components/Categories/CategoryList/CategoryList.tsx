import { useState, useEffect } from 'react';
import { GET_USER_CATEGORIES } from '../../../helpers/gql/queries';
import { useLazyQuery } from '@apollo/client';
import { useAuth } from '../../../helpers/hooks/useAuth';
import { toast } from 'react-toastify';
import { ICategory } from '../../../helpers/interfaces/categories';
import { List } from '@mui/material';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const { userId } = useAuth();

  // const loc = useLocation();
  // console.log('loc', loc);

  const [getUserCategories, { data, loading, error }] =
    useLazyQuery(GET_USER_CATEGORIES);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUserCategories({
          variables: { id: Number(userId) },
        });
        setCategories(response.data.categories);
      } catch (err) {
        if (error) toast.error('Request error');
      }
    })();
  }, [error, getUserCategories, userId]);

  // console.log('Categories data :>> ', categories);

  return (
    <>
      {!loading && data && (
        <>
          <List sx={{ width: '100%' }}>
            {categories.map((category: ICategory) => (
              <CategoryItem key={Number(category.id)} data={category} />
            ))}
          </List>
        </>
      )}
    </>
  );
};
