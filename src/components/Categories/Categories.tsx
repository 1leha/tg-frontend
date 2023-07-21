import { useLazyQuery } from '@apollo/client';
import { GET_USER_CATEGORIES } from '../../helpers/gql/queries';
import { useAuth } from '../../helpers/hooks/useAuth';
import { useState, useEffect } from 'react';

interface ICategory {
  id?: number;
  name?: string;
  userId?: number;
}

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { email, token, userId } = useAuth();
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('useAuth userId', userId);
  console.log('useAuth email', email);
  console.log('useAuth token', token);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

  const [getUserCategories, { data, loading, error }] =
    useLazyQuery(GET_USER_CATEGORIES);

  useEffect(() => {
    getUserCategories({
      variables: { id: Number(userId) },
    })
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(error));
  }, [error, getUserCategories, userId]);

  console.log('Categories data :>> ', categories);

  return (
    <>
      {!loading && data && (
        <>
          <div>
            Categories of user {email} {categories.length ?? 0}
          </div>
          <ul>
            {categories.map((category: ICategory) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
