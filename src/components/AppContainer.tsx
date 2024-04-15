'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { FastForwardOutlined } from '@mui/icons-material';
import { Alfa_Slab_One } from 'next/font/google';

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerLinks = [
    {
      name: 'Dashboard',
      icon: <GridViewOutlinedIcon />,
      path: '/admin',
    },
  ];

  const drawer = (
    <>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Link href="/admin">
          <StorefrontIcon
            sx={{
              fontSize: { xs: 35, sm: 45 },
              color: {
                xs: 'hsla(185, 64%, 39%, 1.0)',
              },
            }}
          />
        </Link>
      </Toolbar>

      <Divider />

      <List>
        {drawerLinks.map((drawLink, index) => (
          <ListItem key={index} disablePadding onClick={handleDrawerClose}>
            <Link
              href={drawLink.path}
              passHref
              style={{ textDecoration: 'none' }}
            >
              <ListItemButton
                disableRipple
                sx={{
                  width: '100vw',
                }}
              >
                <ListItemIcon>{drawLink.icon}</ListItemIcon>
                <ListItemText
                  primary={drawLink.name}
                  sx={{ color: 'rgb(75, 85, 99)' }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );

  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* reset defaults */}
      <CssBaseline />

      {/* header */}
      <AppBar>
        <Toolbar sx={{ backgroundColor: '#ffffff' }}>
          <IconButton
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* navbar */}
      <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* main */}
      <Box
        component="main"
        sx={{
          height: '100%',
          margin: '80px auto',
          padding: '2rem',
          color: 'rgb(75, 85, 99)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
