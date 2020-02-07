import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ResultCard from "./result-card";
import GmCard from "./gm-card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function ResultGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <GmCard />
        </Grid>
        {createCards().map(card => (
          <Grid item xs={4}>
            {card}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const createCards = () => {
  const cards = [];
  let len = 20;
  while (len--) {
    cards.push(<ResultCard />);
  }

  return cards;
};
