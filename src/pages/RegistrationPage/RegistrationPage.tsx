import { Typography, TextField, Container, Button, Box } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

interface IFormValue {
  email: string;
  password: string;
}

const authValidationSchema = yup.object({
  email: yup
    .string()
    .required('E-mail is required!')
    .matches(
      /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
      'Input valid e-mail!'
    ),
  password: yup.string().required('Password is required!'),
});

const M_RegisterUser = gql`
  mutation registerUser($user: CreateUserInput!) {
    registerUser(registerUser: $user) {
      id
      email
      token
    }
  }
`;

export const RegistrationPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const [registerUser, { data, loading, error }] = useMutation(M_RegisterUser, {
    onError(error) {
      console.log('registerUser error :>> ', error.message);
    },
  });

  if (!error && !loading) {
    console.log('registerUser >> data :>> ', data?.registerUser);
    data?.registerUser &&
      localStorage.setItem('token', data?.registerUser.token);
  }

  const submitHandler = (values: IFormValue, actions: any) => {
    registerUser({ variables: { user: values } });

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
          Register please!
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
                {loading ? 'Sending...' : 'Register'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
