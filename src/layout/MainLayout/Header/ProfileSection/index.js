import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Fade,
  Button,
  ClickAwayListener,
  Paper,
  Popper,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle
} from '@mui/material';

// assets
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';

// ==============================|| PROFILE SECTION ||============================== //

const ProfileSection = () => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 1) {
      setDialogOpen(true);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        sx={{ minWidth: { sm: 50, xs: 35 } }}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        aria-label="Profile"
        onClick={handleToggle}
        color="inherit"
      >
        <AccountCircleTwoToneIcon sx={{ fontSize: '1.5rem' }} />
      </Button>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10]
            }
          },
          {
            name: 'preventOverflow',
            options: {
              altAxis: true
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    minWidth: 250,
                    backgroundColor: theme.palette.background.paper,
                    pb: 0,
                    borderRadius: '10px'
                  }}
                >
                  <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                      <HelpOutlineOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Acerca de..." />
                  </ListItemButton>
                  <Dialog
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle style={{ display: 'flex', justifyContent: 'center' }} id="alert-dialog-title">
                      {'ESPOCH-UPROCACH'}
                    </DialogTitle>
                    <DialogContent>
                      <img
                        src={require('../../../../assets/images/login.png')}
                        alt="login"
                        style={{ width: '400px', display: 'block', margin: '0 auto' }}
                      />
                      <DialogContentText id="alert-dialog-description">
                        Fortalecimiento de la Gestión de la Union Provincial de Cooperativas de Ahorro y Crédito de Chimborazo UPROCACH a
                        través de un Modelo de Gestión Integral y Plan de Marketing Digital que permita innovar, desarrollar un software
                        financiero y una pagina web para mejorar el crecimiento orgánico de las cooperativas en territorio de su influencia
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleDialogClose} color="primary">
                        Cerrar
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    component={RouterLink}
                    to="/"
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                  </ListItemButton>
                </List>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
