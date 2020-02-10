import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
  let len = 6;
  while (len--) {
    if(len%2) {
      cards.push(<ResultCard />);
    } else {
      cards.push(<GmCard />);
    }
  }

  return cards;
};
