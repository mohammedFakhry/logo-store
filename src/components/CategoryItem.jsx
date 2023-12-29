import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import { Box, ButtonBase, styled, Typography } from '@mui/material';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: '100% 100%',
  // backgroundPosition: 'center center',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



const CategoryItem = ({ catData }) => {
  return (
    <>
      {catData && catData.map((item) => (
        <ImageListItem key={item.id}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: window.innerWidth<676? "60%": '100%', margin: 'auto' }}>
              <ImageButton
                focusRipple
                key={item.title}
                style={{
                  // width: item.width,
                  width: "100%",
                }}
                >
                {/* <ImageSrc style={{ height: "100%", backgroundImage: `url(${item.img}?w=248&fit=crop&auto=format&dpr=2)` }} /> */}
                <ImageSrc style={{ maxWidth: "100% !important", height: "100%", backgroundImage: `url(${item.image}?w=248&auto=format&dpr=2)` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {/* {item.title} */}
                    {item.category}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
          </Box>
        </ImageListItem>
      ))}
    </>
  )
}

export default CategoryItem

{/* <img
  src={`${item.img}?w=248&fit=crop&auto=format`}
  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
  alt={item.title}
  loading="lazy"
/> */}