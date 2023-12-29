import React from 'react'
import { Box, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import LinkIcon from '@mui/icons-material/Link';
import MdPhone from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { pink } from '@mui/material/colors';

const linksGrid = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  transition: "all ease-in-out 1s",
  backgroundColor: "#ffa400",
  '&:hover': {
    backgroundColor: "#eaf6ff",
    color: "#232528"
  },
  '&:after': {
    content: "",
    position: "absolute",
    left: "0",
    bottom: 0,
    height: "2px",
    width: "100%",
    backgroundColor: "#009ffd",
  }
}));

const BoxStyle = {
  backgroundColor: '#009ffd',
  color: '#fff',
  position: "relative",

  "&:after": {
    content: '" "',
    position: "absolute",
    left: 0,
    top: "-20px",
    height: "40px",
    width: "100%",
    backgroundColor: "inherit",
    transform: "rotate(-1deg)",
  }
}

const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: "#eaf6ff",
  },
}));


const Footer = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6", "link 7", "link 8"];

  return (
    <Box sx={BoxStyle}>
      <Grid container spacing={0} padding={5}>
        <Grid Item xs={12} md={4}>
          <Box>
          <Typography variant="h3" component="h2" color="#fff">LOGO</Typography>
          <Typography variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet molestias impedit eveniet aut veritatis. Minima incidunt obcaecati dignissimos? Repellendus amet deserunt fugit eligendi totam. Voluptatem incidunt accusamus eos alias?</Typography>
          </Box>
        </Grid>

        <Grid container Item xs={12} md={5} wrap='wrap'>
          <Grid item xs={12} md={12}>
            <Typography variant="h3" component="h3" color="#fff">Useful Links</Typography>
              <List>
                <Grid container xs={12}>
                  {links.map((element, idx) => {
                    return <Grid item xs={12} sm={6} key={idx}>
                        <MyListItemButton className='hvr-shutter-out-horizontal'>
                          <ListItemIcon>
                            <LinkIcon />
                          </ListItemIcon>
                          <ListItemText primary={element} />
                        </MyListItemButton>
                    </Grid>
                  })}
                </Grid>
              </List>
          </Grid>
        </Grid>

        <Grid Item xs={12} md={3}>
          <Box>
            <Typography variant="h3" component="h3" color="#fff">Useful Links</Typography>

            <Chip icon={<LocationOnIcon color='#2a2a72' />} label="Sudan, Atbara" sx={{ backgroundColor: "transparent", color: "#fff" }} />
            <Chip icon={<MdPhone color='#2a2a72' />} label="+249 9123 456 789" sx={{ backgroundColor: "transparent", color: "#fff" }} />
            <Chip icon={<MailOutlineIcon color='#2a2a72' />} label="example@info.net" sx={{ backgroundColor: "transparent", color: "#fff" }} />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }} mt={4}>
              <Box className='hvr-sink'><TwitterIcon fontSize="large" sx={{ cursor: "pointer" }} /></Box>
              <Box className='hvr-sink'><InstagramIcon fontSize="large" sx={{ cursor: "pointer" }} /></Box>
              <Box className='hvr-sink'><FacebookIcon fontSize="large" sx={{ cursor: "pointer" }} /></Box>
              <Box className='hvr-sink'><LinkedInIcon fontSize="large" sx={{ cursor: "pointer" }} /></Box>
            </Box>
          </Box>
        </Grid>

      </Grid>
        <Typography variant="caption" component="p" textAlign="center" py={4} gutterBottom>
          COPYRIGHT { new Date().getFullYear() } © | ALL RIGHTS RESERVED
        </Typography>
    </Box>
  )
}

export default Footer