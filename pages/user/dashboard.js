import { Container, Typography, Button, styled } from '@mui/material';
import TemplateDefault from '../../src/templates/Default';

const useStyles = styled((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
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
    </TemplateDefault>
  );
}
