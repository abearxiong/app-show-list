import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

// ...existing code...

const menuItems = [
  { text: 'Inbox', icon: <InboxIcon /> },
  { text: 'Mail', icon: <MailIcon /> },
  // 可以根据需要添加更多菜单项
];

export const LayoutMenu = () => {
  return (
    <Menu open={false} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </MenuItem>
      ))}
    </Menu>
  );
};
