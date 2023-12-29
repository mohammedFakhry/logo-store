import React from 'react'
import Product from './product'
import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'

const Products = () => {
  const [apiData, setApiData] = useState();

    // Function to collect data
    const getApiData = async () => {
    const response = await fetch(
        "https://fakestoreapi.com/products?limit=6"
    ).then((response) => response.json());

    setApiData(response);
    };

    useEffect(() => {
      getApiData();
    }, []);

  return (
    <Grid container sx={{ width: "90%", margin: "5px auto" }} direction='row' spacing={3} justifyContent="space-around" alignItems="center">
        {
          <Product cartData={apiData} />
          // popularProducts.map( item => <Product item={item} key={item.id} /> )
        }
    </Grid>
  )
}

export default Products