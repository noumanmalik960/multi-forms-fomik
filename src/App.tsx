import "./App.css";
import Stepper from "./components/stepper/index";
// Material-UI imports
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid justify="center" alignContent="center" container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Stepper />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
