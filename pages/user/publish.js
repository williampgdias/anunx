import {
  Box,
  Container,
  TextField,
  Typography,
  Select,
  Button,
  IconButton,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: 200,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    '& $mainImage': {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
    },
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

      <Container
        maxWidth='md'
        className={classes.boxContainer}
      >
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

      <Container
        maxWidth='md'
        className={classes.boxContainer}
      >
        <Box className={classes.box}>
          <Typography
            component='h6'
            variant='h6'
            color='textPrimary'
          >
            Images
          </Typography>
          <Typography
            component='div'
            variant='body2'
            color='textPrimary'
          >
            The first image is the main of the add.
          </Typography>
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone}>
              <Typography
                variant='body2'
                color='textPrimary'
              >
                Click to add or drag the img here.
              </Typography>
            </Box>

            <Box
              className={classes.thumb}
              style={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
              }}
            >
              <Box className={classes.mainImage}>
                <Typography
                  variant='body'
                  color='secondary'
                >
                  Main
                </Typography>
              </Box>
              <Box className={classes.mask}>
                <IconButton color='secondary'>
                  <DeleteForever fontSize='large' />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth='md'
        className={classes.boxContainer}
      >
        <Box className={classes.box}>
          <Typography
            component='h6'
            variant='h6'
            color='textPrimary'
          >
            Description
          </Typography>
          <Typography
            component='div'
            variant='body2'
            color='textPrimary'
          >
            Write the details of what you are looking.
          </Typography>
          <TextField
            multiline
            rows={6}
            variant='outlined'
            fullWidth
          />
        </Box>
      </Container>

      <Container
        maxWidth='md'
        className={classes.boxContainer}
      >
        <Box className={classes.box}>
          <Typography
            component='h6'
            variant='h6'
            color='textPrimary'
            gutterBottom
          >
            Contact
          </Typography>

          <TextField
            label='Name'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br />
          <br />
          <TextField
            label='E-mail'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br />
          <br />
          <TextField
            label='Phone number'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br />
          <br />
        </Box>
      </Container>

      <Container
        maxWidth='md'
        className={classes.boxContainer}
      >
        <Box textAlign='right'>
          <Button
            variant='contained'
            color='primary'
          >
            Publish Add
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default Publish;
