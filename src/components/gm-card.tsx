import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import OpenNewIcon from '@material-ui/icons/OpenInNew';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Icon from '@material-ui/core/Icon'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import cylogo from '../images/cytoscape-logo.svg'
import exlogo from '../images/ex-logo.svg'
import ndexlogo from '../images/ndex-logo.svg'


import gmlogo from '../images/gm-logo.png';
import gmth from '../images/gm1.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 550,
      height: 550,
    },
    logo: {
      height: '1.5em',

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function GmCard() {
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
            <img alt="Cytoscape Home" src={gmlogo} className={classes.logo} />
          </Icon>
        }
        title="GeneMANIA - Homo Sapiens"
        subheader="Search result of N genes"
      />
      <CardMedia
        className={classes.media}
        image={gmth}
        title="Gene Mania result"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          (Description of Gene Mania?). 
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
