import React, { useEffect, useState } from 'react'
import NewsLetter from '../components/NewsLetter'
import { Badge, Box, Grid, Stack, Typography, FormControl, InputLabel, Select, MenuItem, ButtonGroup, Button } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'



const Product = () => {
  const [size, setSize] = useState();
  const [productData, setProductData] = useState()
  const [count, setCount] = useState(1)

    const getApiData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/3')
        .then(res=>res.json())
        .then(json=>setProductData(json))
    };
    
    useEffect(() => {
        getApiData();
    }, []);

  function incCount(e) {
    e.target.nextElementSibling.innerHTML = +e.target.nextElementSibling.innerHTML+1
  }

  function decCount(e) {
    const count = e.target.previousElementSibling.innerHTML
    if ( +count !== 0 ) {
        e.target.previousElementSibling.innerHTML = +count-1
    }
  }

  
  return (
    <div>
      {productData && <Box component="div" sx={{ p: 2 }}>
        <Grid container spacing={0} gap={2} direction={{ xs: "column", md: "row" }} >
          <Grid Item xs={12} md={6} sx={{ overflow: "hidden" }} p={2} textAlign="center">
            <img src={productData.image} alt="" loading="lazy" xs={{ width: "fit-content", margin: "auto" }} />
          </Grid>

          <Grid container Item sx={12} md={5}>
            <Box>
              <Typography variant="h3" gutterBottom>{productData.title}</Typography>
              <Typography variant="body1" gutterBottom>{productData.description}</Typography>
            </Box>
            <Box>
              <Typography variant="h4" gutterBottom>${productData.price}</Typography>
            </Box>

            <Grid item sm={12} xs={12} direction="row" justifyContent="space-between" alignItems="center" >
              <Stack spacing={3} direction="row" >
                <Typography variant="subtitle2" gutterBottom>color:</Typography>
                <Badge color="secondary" badgeContent=" " anchorOrigin={{ vertical: 'center', horizontal: 'center' }}></Badge>
                <Badge color="error" badgeContent=" " anchorOrigin={{ vertical: 'center', horizontal: 'center' }}></Badge>
                <Badge color="info" badgeContent=" " anchorOrigin={{ vertical: 'center', horizontal: 'center' }}></Badge>
                <Badge color="warning" badgeContent=" " anchorOrigin={{ vertical: 'center', horizontal: 'center' }}></Badge>
              </Stack>
            </Grid>

            <Grid item sm={12} xs={12} direction="row" justifyContent="space-between" alignItems="center">
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={size}
                  onChange={""}
                  label="Size"
                  sx={{ padding: "0px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>XS</MenuItem>
                  <MenuItem value={2}>S</MenuItem>
                  <MenuItem value={3}>M</MenuItem>
                  <MenuItem value={4}>L</MenuItem>
                  <MenuItem value={5}>XL</MenuItem>
                  <MenuItem value={6}>XXL</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '15px' }}>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={incCount}>+</Button>
                <Typography variant="span" sx={{ minWidth: "50px", textAlign: "center" }}>0</Typography>
                <Button onClick={decCount}>-</Button>
              </ButtonGroup>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" endIcon={<AddShoppingCart />} sx={{ marginTop: "20px" }}>ADD TO CART</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      }

      <NewsLetter />
    </div>
  )
}

export default Product
