"use client"; // Marks this component as a Client Component

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation';  // Use next/navigation instead of next/router

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();  // Use next/navigation's useRouter

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/');  // Navigate to home
        break;
      case 1:
        router.push('/profil');  // Navigate to profiles
        break;
      case 2:
        router.push('/prispevok');  // Navigate to posts
        break;
      case 3:
        router.push('/auth/prihlasenie');  // Navigate to login
        break;
      case 4:
        router.push('/auth/registracia');  // Navigate to registration
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleNavigation} showLabels sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profily" icon={<PeopleIcon />} />
      <BottomNavigationAction label="Príspevky" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />
      <BottomNavigationAction label="Registrácia" icon={<HowToRegIcon />} />
    </BottomNavigation>
  );
};

export default NavBar;
