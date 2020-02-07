import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import cylogo from '../images/cytoscape-logo.svg'
import humanIcon from '../images/human.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),

    },
    logo: {
      width: theme.spacing(5),
      height: '100%',

    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 600,
        '&:focus': {
          width: 800,
        },
      },
    },
  }),
);

export default function TitleBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img alt="Cytoscape Home Logo" src={cylogo} className={classes.logo} />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ADM ADORA2B AK4 AKAP12 ALDOA ALDOB ALDOC AMPD3 ANGPTL4 ANKZF1 ANXA2 ATF3 ATP7A B3GALT6 B4GALNT2 BCAN BCL2 BGN BHLHE40 BNIP3L BRS3 BTG1 CA12 CASP6 CAV1 CCNG2 CCRN4L CDKN1A CDKN1B CDKN1C CHST2 CHST3 CITED2 COL5A1 CP CSRP2 CTGF CXCR4 CXCR7 CYR61 DCN DDIT3 DDIT4 DPYSL4 DTNA DUSP1 EDN2 EFNA1 EFNA3 EGFR ENO1 ENO2 ENO3 ERO1L ERRFI1 ETS1 EXT1 F3 FAM162A FBP1 FOS FOSL2 FOXO3 GAA GALK1 GAPDH GAPDHS GBE1 GCK GCNT2 GLRX GPC1 GPC3 GPC4 GPI GRHPR GYS1 HAS1 HDLBP HEXA HK1 HK2 HMOX1 HOXB9 HS3ST1 HSPA5 IDS IER3 IGFBP1 IGFBP3 IL6 ILVBL INHA IRS2 ISG20 JMJD6 JUN KDELR3 KDM3A KIF5A KLF6 KLF7 KLHL24 LALBA LARGE LDHA LDHC LOX LXN MAFF MAP3K1 MIF MT1E MT2A MXI1 MYH9 NAGK NCAN NDRG1 NDST1 NDST2 NEDD4L NFIL3 NR3C1 P4HA1 P4HA2 PAM PCK1 PDGFB PDK1 PDK3 PFKFB3 PFKL PFKP PGAM2 PGF PGK1 PGM1 PGM2 PHKG1 PIM1 PKLR PKP1 PLAC8 PLAUR PLIN2 PNRC1 PPARGC1A PPFIA4 PPP1R15A PPP1R3C PRDX5 PRKCA PRKCDBP PTRF PYGM RBPJ RORA RRAGD S100A4 SAP30 SCARB1 SDC2 SDC3 SDC4 SELENBP1 SERPINE1 SIAH2 SLC25A1 SLC2A1 SLC2A3 SLC2A5 SLC37A4 SLC6A6 SRPX STBD1 STC1 STC2 SULT2B1 TES TGFB3 TGFBI TGM2 TIPARP TKTL1 TMEM45A TNFAIP3 TPBG TPD52 TPI1 TPST2 UGP2 VEGFA VHL VLDLR WISP2 WSB1 XPNPEP1 ZFP36 ZNF292"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img alt="Cytoscape Home Logo" src={humanIcon} className={classes.logo} />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
