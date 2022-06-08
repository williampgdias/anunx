import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  },
}));

export default function Home() {
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
        >
          My Adds
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.buttonAdd}
        >
          Publish new ad
        </Button>
      </Container>
      <Container maxWidth='md'>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Post title'
              />
              <CardContent>
                <Typography
                  variant='h5'
                  component='h2'
                >
                  Product X
                </Typography>
                <Typography>€60</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  color='primary'
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Post title'
              />
              <CardContent>
                <Typography
                  variant='h5'
                  component='h2'
                >
                  Product X
                </Typography>
                <Typography>€60</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  color='primary'
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Post title'
              />
              <CardContent>
                <Typography
                  variant='h5'
                  component='h2'
                >
                  Product X
                </Typography>
                <Typography>€60</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  color='primary'
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Post title'
              />
              <CardContent>
                <Typography
                  variant='h5'
                  component='h2'
                >
                  Product X
                </Typography>
                <Typography>€60</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  color='primary'
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
