import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ToolBar({handleDrawerOpen, open}) {
  // const pages = ['Products', 'Pricing', 'Blog'];
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <Toolbar>
    <IconButton
      color='inherit'
      aria-label='open drawer'
      onClick={handleDrawerOpen}
      edge='start'
      sx={{
        marginRight: 5,
        ...(open && {display: 'none'}),
      }}>
      <MenuIcon />
    </IconButton>
    <Typography variant='h6' noWrap component='div'>
      Mini variant drawer
    </Typography>
  </Toolbar>
);
}