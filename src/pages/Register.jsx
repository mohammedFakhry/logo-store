import React from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='auth-img-container'>
      <Box component="fieldset" width={{ sm: "90%", xs: "90%", md: "85%" }} m="auto" p={3} >
        <legend style={{ backgroundColor: 'rgba(25, 118, 210, 0.04)' }}><Typography color='#1976d2' variant="h5" gutterBottom>Create An Account</Typography></legend>

        <Box component="form" width={{ sx: "100%" }} textAlign="center">
          <TextField id="outlined-firstName" label="First Name" type="text" sx={{ m: 1,  }} style={{ width: window.innerWidth<750? '100%': '45%' }}  />
          <TextField id="outlined-lastName" label="Last Name" type="text" sx={{ m: 1,  }} style={{ width: window.innerWidth<750? '100%': '45%' }}  />
          <TextField id="outlined-lastUsername" label="Usarname" type="text" sx={{ m: 1,  }} style={{ width: window.innerWidth<750? '100%': '45%' }} />
          <TextField id="outlined-lastEmail" label="Email" type="email" sx={{ m: 1,  }} style={{ width: window.innerWidth<750? '100%': '45%' }} />

          <FormControl sx={{ m: 1, }} variant="outlined" style={{ width: window.innerWidth<750? '100%': '45%' }}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, }} variant="outlined" style={{ width: window.innerWidth<750? '100%': '45%' }}>
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          
          <Box>

          <FormControlLabel control={<Checkbox />} label="By creating an account, iconsent to the procrssing of my personal data in accordance with the privacy policy" />
          </Box>
          <Button variant="contained" size="large">create</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Register
