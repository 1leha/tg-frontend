import { Typography, TextField, Container, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('E-mail is required!')
    .matches(
      /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
      'Input valid e-mail!'
    ),
  password: yup.string().required('Password is required!'),
});

export const RegistrationPage = () => {
  const initialValues = {
    email: '',
    password: '',
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
          onSubmit={value => {
            console.log(value);
          }}
          validationSchema={validationSchema}
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

              <Button type="submit" variant="contained">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
