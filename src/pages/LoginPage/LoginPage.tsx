import { Typography, TextField, Container, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { ICredentials } from '../../helpers/interfaces/auth';
import { authValidationSchema } from '../../helpers/validation/authValidation';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as operation from '../../redux/auth/auth.operations';
import { LOGIN_USER_MUTATION } from '../../helpers/gql/mutations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER_MUTATION, {
    onError(error) {
      toast.error(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    dispatch(operation.loginUser(data?.loginUser));
  }, [data, dispatch]);

  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = async (credentials: ICredentials, actions: any) => {
    await loginUser({ variables: { user: credentials } });

    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        mt: 10,
      }}
    >
      <Box>
        <Typography sx={{ mb: 6 }} component={'h3'} variant="h3" align="center">
          Login please!
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={authValidationSchema}
        >
          {formik => (
            <Form>
              <TextField
                sx={{ mb: 5 }}
                fullWidth
                id="email"
                name="email"
                label="E-mail"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                sx={{ mb: 5 }}
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
