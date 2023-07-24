import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import { taskValidation } from '../../../helpers/validation/taskValidation';
import { TTaskValues } from '../../../helpers/interfaces/tasks';
import { Box, Typography } from '@mui/material';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  handleTaskAction: (args: any) => void;
  initialValues: TTaskValues;
}

export const TaskModal = ({
  isOpen,
  handleClose,
  initialValues,
  handleTaskAction,
}: IProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleTaskAction}
        validationSchema={taskValidation}
      >
        {formik => (
          <Form>
            <DialogTitle>Add task</DialogTitle>
            <DialogContent>
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                sx={{ mt: 2 }}
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                maxRows={3}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              <div>
                Char left:{' '}
                {Number(process.env.REACT_APP_CHAR_LEFT) -
                  formik.values.description.length}
              </div>

              <Box sx={{ mt: 5, display: 'flex', gap: 4 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Typography sx={{ flexBasis: '30%' }}>Start date</Typography>
                  <TextField
                    sx={{ flexBasis: '50%', flexGrow: 1 }}
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                    helperText={null}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Typography sx={{ flexBasis: '30%' }}>End date</Typography>
                  <TextField
                    sx={{ flexBasis: '50%', flexGrow: 1 }}
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.endDate && Boolean(formik.errors.endDate)
                    }
                    helperText={null}
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleTaskAction}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
