import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AppLogoSVG from '../assets/AppLogo.svg';
import { BsList } from 'react-icons/bs';

const navBarArr = ['Why DCE', 'How Its Work', 'Register ', 'Login'];

function UnAuthAppBar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" className="auth_appbar_main">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={AppLogoSVG} alt="logo" className="auth_appbar_row1_img"  />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
       
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
            }}
          >
            <img src={AppLogoSVG} alt="logo" className="auth_appbar_row1_img" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <BsList color="black" size="45" style={{ marginLeft: '300px', marginTop: '10px' }} onClick={handleOpenNavMenu} />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navBarArr.map((_) => (
                <MenuItem key={_} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className="auth_appbar_menus">
                    {t(_)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ width: '80%', display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <a style={{ textDecoration: 'none' }} className="animation_dec" href="#WhyChooseDCE">
              <Button
                className="auth_appbar_menus"
                style={{ display: 'inline-block' }}
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('About')}
              </Button>
            </a>
            <a style={{ textDecoration: 'none' }} className="animation_work" href="#FindGreatWork">
              <Button
                className="auth_appbar_menus"
                style={{ display: 'inline-block' }}
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {/* {page} */}
                {t('Blog')}
              </Button>
            </a>

            <a style={{ textDecoration: 'none' }} className="animation_work" href="#FindGreatWork">
              <Button
                className="auth_appbar_menus"
                style={{ display: 'inline-block' }}
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {/* {page} */}
                {t('Gallery')}
              </Button>
            </a>
            <Link to="/blog" style={{textDecoration:"none",marginTop:"13px"}}>
              <Button className="blogbutton" >
               
                {t('Blogs')}
              </Button>
            </Link> 
            {/* ))} */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/select_role_login">
              <Button className="auth_appbar_button_login" sx={{ p: 0 }}>
                {t('Login')}
              </Button>
            </Link>
            <Link to="/select_role_register">
              <Button className="auth_appbar_button_register" sx={{ p: 0 }}>
               
                {t('Registration')}
              </Button>
            </Link> 
            
          </Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UnAuthAppBar;
