import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import { taskValidation } from '../../../helpers/validation/taskValidation';
import { TTaskValues } from '../../../helpers/interfaces/tasks';
import { Box, LinearProgress, Typography } from '@mui/material';
import { MAX_CHARS_IN_DESCRIPTION } from '../../../helpers/constants/options';

interface IProps {
  isOpen: boolean;
  edit?: boolean;
  handleClose: () => void;
  handleTaskAction: (args: any) => void;
  initialValues: TTaskValues;
}

export const TaskModal = ({
  isOpen,
  edit,
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
        {formik => {
          const descriptioLength = formik.values.description.length;
          const progress = (descriptioLength * 100) / MAX_CHARS_IN_DESCRIPTION;
          const charsLeft = MAX_CHARS_IN_DESCRIPTION - descriptioLength;
          const isCharsLeft = charsLeft > 0;
          const descriptionValue = formik.values.description;
          const descriptionCutedValue = formik.values.description.slice(
            0,
            MAX_CHARS_IN_DESCRIPTION - 1
          );

          return (
            <Form>
              <DialogTitle>{edit ? 'Edit task' : 'Add task'}</DialogTitle>
              <DialogContent>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  autoComplete="off"
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
                  autoComplete="off"
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={2}
                  value={isCharsLeft ? descriptionValue : descriptionCutedValue}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
                <LinearProgress
                  sx={{ mt: 1 }}
                  variant="determinate"
                  value={progress}
                />
                <Typography component="p" sx={{ fontSize: '12px' }}>
                  Chars left: {charsLeft}
                </Typography>

                <Box sx={{ mt: 5, display: 'flex', gap: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                    }}
                  >
                    <Typography sx={{ flexBasis: '30%' }}>
                      Start date
                    </Typography>
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

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                    }}
                  >
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
          );
        }}
      </Formik>
    </Dialog>
  );
};
