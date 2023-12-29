import React, { useState } from 'react'
import Products from '../components/products'
import NewsLetter from '../components/NewsLetter'
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ProductList = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState();
  const [sort, setSort] = useState();

  return (
    <div>
      <Typography variant="h2" >Dresses</Typography>
      <Box className="filter-container" paddingX={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        <Box className="filter">
          <Typography variant="h6" component="span" marginRight={2}>Filter Products:</Typography>

          <FormControl variant="standard" sx={{ minWidth: 120, verticalAlign: "unset" }}>
            <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={color}
              onChange={""}
              label="Color"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Black</MenuItem>
              <MenuItem value={2}>Red</MenuItem>
              <MenuItem value={3}>Yellow</MenuItem>
              <MenuItem value={4}>White</MenuItem>
              <MenuItem value={5}>Teal</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={size}
              onChange={""}
              label="Size"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>XS</MenuItem>
              <MenuItem value={2}>S</MenuItem>
              <MenuItem value={3}>M</MenuItem>
              <MenuItem value={4}>L</MenuItem>
              <MenuItem value={5}>XL</MenuItem>
              <MenuItem value={5}>XXL</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className="filter2">
          <Typography variant="h6" component="span" marginRight={2}>Sort Products:</Typography>

          <FormControl variant="standard" sx={{ minWidth: 120, verticalAlign: "unset" }}>
            <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sort}
              onChange={""}
              label="Sort"
            >
              <MenuItem value="">
                <em>Newest</em>
              </MenuItem>
              <MenuItem value={1}>Price ( asc )</MenuItem>
              <MenuItem value={2}>Price ( desc )</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Products />
      <NewsLetter />
    </div>
  )
}

export default ProductList