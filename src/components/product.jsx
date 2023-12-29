import React from 'react'
import '../App.css'
import { Box, Divider, Grid, Tooltip } from '@mui/material'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import { useState } from 'react';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyCard = styled(Card)(({ theme }) => ({
  border: "1px solid #2a2a7242",
  transition: "all ease-in-out 1s",
  '&:hover': {
    border: "1px solid #2a2a72",
  },
  '&:hover .css-1q7wku1-MuiCardMedia-root': {
    transform: "rotate(-1deg) scale(.9)",
  },
  '&:hover .css-1j4ii0r-MuiDivider-root': {
    transition: "all ease-in-out 1s",
    width: "100%"
  },
}));

const StyledBadge = styled(CardMedia)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Product = ({ cartData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const hadleFavoriteIcon = (e) => {
    e.target.firstChild.classList.toggle('my-Favorite-icon')
  }


  return (
    <>
      {cartData && cartData.map( (item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <MyCard sx={{ maxWidth: 345, height: 640, display: "flex", flexDirection: "column", alignItems: "space-around" }} elevation={4}>
            <Box height="50%">
              <CardMedia
                component="img"
                height="100%"
                image={item.image}
                alt="Paella dish"
                sx={{ width: "fit-content", margin: "auto", paddingTop: "5px", transition: "all ease-in-out 1s" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" textAlign="center" color="text.white">{item.category}</Typography>
              <Divider sx={{ color: "#eaf6ff", margin: "7px auto", width: "30px"  }}></Divider>
              <Typography variant="overline" color="text.secondary">{item.description.substring(0, 120)}</Typography>
              <Typography variant="body2" component="s" display="block" mt={2} gutterBottom>Price: {item.price}</Typography>
              <Typography variant="body2" component="strong" fontWeight="bold" display="block" gutterBottom>Pricre: { Math.floor(item.price-(item.price*0.2)) }</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title="add to favorites" arrow>
                <IconButton className='class1' aria-label="add to favorites" onClick={hadleFavoriteIcon} id="fav">
                  <FavoriteIcon className='class2' onClick={ (e) => e.stopPropagation() } id="MyFavoriteIcon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="add to cart" arrow>
                <IconButton aria-label="add to cart">
                  <AddShoppingCart />
                </IconButton>
              </Tooltip>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </MyCard>
        </Grid>
      ) ) 
      }
    </>
  )
}

export default Product