import { Box, Container, TextField, Typography, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
}));

const Publish = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container
        maxWidth='sm'
        className={classes.container}
      >
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
        >
          Publish Add
        </Typography>
        <Typography
          component='h5'
          variant='h5'
          align='center'
          color='textPrimary'
        >
          The more detailed the better!
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Box className={classes.box}>
          <Typography
            component='h6'
            variant='h6'
            color='textPrimary'
          >
            Add Title
          </Typography>
          <TextField
            label='ex.: Ps5 second hand'
            size='small'
            fullWidth
          />

          <br />
          <br />
          <Typography
            component='h6'
            variant='h6'
            color='textPrimary'
          >
            Category
          </Typography>
          <Select
            native
            value=''
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age',
            }}
          >
            <option value=''>Select</option>
            <option value={1}>Baby and Toddler</option>
            <option value={2}>Agriculture</option>
            <option value={3}>Fashion</option>
            <option value={3}>Cars, Motorcycle and boats</option>
            <option value={3}>Services</option>
            <option value={3}>Pleasure</option>
            <option value={3}>Animals</option>
            <option value={3}>Furniture, House and Garden</option>
            <option value={3}>House</option>
            <option value={3}>Equipment and Tools</option>
            <option value={3}>Tables and Phones</option>
            <option value={3}>Sports</option>
            <option value={3}>Tech</option>
            <option value={3}>Jobs</option>
            <option value={3}>Others</option>
          </Select>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default Publish;
