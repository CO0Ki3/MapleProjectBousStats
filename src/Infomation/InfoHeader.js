import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  
  root: {
    backgroundColor: "#424242",
  },
});

function InfoHeader() {
  const classes = useStyles();
  return(
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar disableGutters={true}>
          <Typography variant="h6" className={classes.typo}>
            메이플스토리 계산기
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default InfoHeader;