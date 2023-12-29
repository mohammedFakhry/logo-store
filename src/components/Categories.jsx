import React from 'react'
import CategoryItem from './CategoryItem'
import { Box, ImageList } from '@mui/material'
import { useState, useEffect } from 'react'

const Categories = () => {
  const [catrgoriesData, setCatrgoriesData] = useState();

    // Function to collect data
    const getApiData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=9")
      .then((response) => response.json());

    setCatrgoriesData(response);
    };

    useEffect(() => {
      getApiData();
    }, []);

  return (
    <Box sx={{ width: "90%", margin: "10px auto", height: 'auto', overflowY: 'hidden' }}>
      <ImageList variant="masonry" cols={ window.innerWidth>1015? 3: window.innerWidth>676? 2: 1 } gap={8} xs={{ position: "relative" }}>
        {
            <CategoryItem catData={catrgoriesData} />
            // categories.map( (item, idx) => <CategoryItem catData={catrgoriesData} Item={item} key={idx} /> )
        }
      </ImageList>
    </Box>
  )
}

export default Categories