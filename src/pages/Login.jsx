import React from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='auth-img-container'>
      <Box component="fieldset" overflow={'hidden'} width={{ sm: "95%", xs: "90%", md: "75%" }} m="10px auto 30px" px={2}>
        <legend style={{ backgroundColor: 'rgba(25, 118, 210, 0.04)' }}><Typography color='#1976d2' variant="h5" gutterBottom>Sign In</Typography></legend>

        <Box component="form" width={{ sx: "100%" }} textAlign="center">
          <TextField id="outlined-firstName" label="Username" type="text" sx={{ m: 1, width: '100%' }} />

          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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

          <Box><Button href="#text-buttons">Do Not Remember The Password ?</Button></Box>
          <Box><Button href="#text-buttons">Create A New Account</Button></Box>

          <Button variant="contained" size="large">Login</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Login
