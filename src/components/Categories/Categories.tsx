import { useLazyQuery } from '@apollo/client';
import { GET_USER_CATEGORIES } from '../../helpers/gql/queries';
import { useAuth } from '../../helpers/hooks/useAuth';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router';

interface ICategory {
  id?: number;
  name?: string;
  userId?: number;
}

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { email, userId } = useAuth();

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

  const handlerCategoryClick = (category: ICategory) => {
    console.log('You clicked by: ', category.name);
    navigate(`${category.id}`, { state: { category } });
  };

  return (
    <>
      {!loading && data && (
        <>
          <div>
            Categories of user {email} {categories.length ?? 0}
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {categories.map((category: ICategory) => (
              <li
                key={category.id}
                onClick={() => handlerCategoryClick(category)}
              >
                <Paper sx={{ p: 2, m: 1 }}>{category.name}</Paper>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
