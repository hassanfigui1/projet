import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export default function SharedList({otherItemsSide, openState}) {
  return (
    <List>
      {otherItemsSide?.map((text, index) => (
        <ListItem key={text} disablePadding sx={{display: 'block'}}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openState ? 'initial' : 'center',
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openState ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{opacity: openState ? 1 : 0}} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
