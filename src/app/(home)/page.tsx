// src/app/page.tsx
import NavBar from '../../components/NavBar';
import Typography from '@mui/material/Typography';

export const metadata = { title: "Domov | ZoškaSnap" };

export default function Home() {
  return (
    <>
      {/* Main content of the home page */}
      <Typography variant="h4" component="h1" align="center" sx={{ mt: 4 }}>
        Domovská Stránka
      </Typography>

      {/* Bottom Navigation */}
      <NavBar />
    </>
  );
}

