import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Fade, Button, ClickAwayListener, Paper, Popper, List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

// assets
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';

// ==============================|| PROFILE SECTION ||============================== //

const ProfileSection = () => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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
                  <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                      <HelpOutlineOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Acerca de..." />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    component={RouterLink}
                    to="/application/login"
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
