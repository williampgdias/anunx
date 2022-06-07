import { Container, Typography, styled } from '@mui/material';
import TemplateDefault from '../../src/templates/Default';

const useStyles = styled((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
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
        >
          My Adds
        </Typography>
      </Container>
    </TemplateDefault>
  );
}
