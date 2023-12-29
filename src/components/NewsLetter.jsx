import React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';

const NewsLetter = () => {
  return (
      <Box sx={{ width: '100%', height: 300, backgroundColor: '#eaf6ff', textAlign: 'center', marginTop: '30px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        '&:hover': {
          // backgroundColor: 'primary.main',
          // opacity: [0.9, 0.8, 0.7],
        },
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} component="h2" sx={{ color: "#232528" }} >NewsLetter</Grid>
            <Grid item xs={12} component="p" sx={{ color: "#232528" }} >Get Timely Updates From Your Favorits Products</Grid>
            <Grid container item xs={12} component="div" spacing={1} justifyContent="center">
              <Grid item sm={10} xs={10} md={7} component="div" >
                <TextField label="Your Email" color="primary" focused fullWidth size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }} />
              </Grid>
              <Grid item sm={10} xs={10} md={2} component="div" >
                <Button className='hvr-ripple-out' sx={{ "&:before": { border: "#1565c0 solid 1px" } }} variant="contained" endIcon={<Send />} size="large" fullWidth>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
      </Box>
  )
}

export default NewsLetter

    // <div>
    //     <h3>NewsLetter</h3>
    //     <p>Get Timely Updates From Your Favorits Products</p>
    //     <div>
    //         <input type="email" name="" id="" />
    //         <span>@</span>
    //     </div>
    // </div>