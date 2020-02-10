import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import OpenNewIcon from "@material-ui/icons/OpenInNew";
import ExpandIcon from "@material-ui/icons/KeyboardArrowRight";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Icon from "@material-ui/core/Icon";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

import logo from "../images/iq1.svg";
import gmlogo from "../images/gm1.svg";
import Button from '@material-ui/core/Button';
import cylogo from '../images/cytoscape-logo.svg'
import exlogo from '../images/ex-logo.svg'
import ndexlogo from '../images/ndex-logo.svg'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 550,
      minWidth: 350,
      height: 550
    },
    logo: {
      height: "1.5em",
      marginLeft: "auto",
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

const ResultCard = (props: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Icon>
            <img alt="Cytoscape Home" src={ndexlogo} className={classes.logo} />
          </Icon>
        }
        title="WP4018 Pathways in clear cell renal cell carcinoma"
        subheader="Top hit from IQuery"
      />
      <CardMedia
        className={classes.media}
        image={logo}
        title="Gene Mania result"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Inactivation of VHL due to mutation or DNA methylation is an early
          event in ccRCC that leads to accumulation of the transcription factor
          HIF-α, which dimerizes with HIF-β and translocates to the nucleus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          edge="start"
          color="inherit"
          aria-label="source"
        >
            <img alt="Open in Cytoscape Desktop" src={cylogo} className={classes.logo} />
        </IconButton>
        <IconButton 
          edge="start"
          color="inherit"
          aria-label="source"
        >
            <img alt="Open in Cytoscape Ex" src={exlogo} className={classes.logo} />
        </IconButton>
        <IconButton 
          edge="start"
          color="inherit"
          aria-label="source"
        >
            <img alt="Cytoscape Home" src={ndexlogo} className={classes.logo} />
        </IconButton>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ExpandIcon />}
          >
            {Math.floor(Math.random() * 100) + 1} More results
          </Button>
      </CardActions>
    </Card>
  );
}

export default ResultCard