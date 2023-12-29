import React, { useEffect, useState } from 'react'
import { Badge, Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'


const Cart = () => {
    const [cartData, setCartData] = useState()

    const getApiData = async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=3")
            .then((response) => response.json());
    
        setCartData(response);
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
        <div style={{ marginTop: 15 }}>
            <Box>
                <Typography variant='h3' textAlign="center">Your Bag</Typography>
                <Box display="flex" justifyContent="space-around" flexWrap='wrap'>
                    <Button variant="outlined">Checkout Now</Button>
                    <Stack spacing={2} direction="row">
                        <Button variant="text">Shopping Bag ( 2 )</Button>
                        <Button variant="text">Your Wishlist ( 0 )</Button>
                    </Stack>
                    <Button variant="contained">Continue Shopping</Button>
                </Box>

                <Box display="flex" gap={2} p={3} my={3} flexDirection={{ xs:'column-reverse', md: 'row' }}>
                    <Box component="section" flex={3} m={2}>
                {cartData && cartData.map((item) => (
                        <Card component="div" style={{ display: 'flex', flexDirection: window.innerWidth > 600? 'row': 'column' }} sx={{ marginBottom: "10px" }} key={item.id}>
                            <Box component="div" width={ window.innerWidth>650?"30%": '80%'} margin='auto' p={3}>
                                <CardMedia component="img" width='100%' alt="green iguana" height="auto" image={item.image} flex={3} />
                            </Box>
                            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} flex={7}>
                                <Typography gutterBottom variant="body1" component="div">Product: <b>{item.title}</b></Typography>
                                <Typography gutterBottom variant="body1" component="div">Category: <b>{item.category}</b></Typography>
                                <Typography gutterBottom variant="body2" component="div">id: <b>{item.id}</b></Typography>
                                <Stack direction="row" alignItems="center" spacing={3} m={2}>
                                    <Badge color="secondary" overlap="circular" badgeContent=""></Badge>
                                    <Badge color="info" overlap="circular" badgeContent=""></Badge>
                                    <Badge color="warning" overlap="circular" badgeContent=""></Badge>
                                </Stack>
                                <Typography gutterBottom variant="body1" component="div">size: <b>37.5</b></Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} flex={2}>
                                <Stack direction="row" spacing={2}>
                                    <Button size="small" onClick={incCount}>+</Button>
                                    <Typography id='product_count' gutterBottom variant="body1" component="span">0</Typography>
                                    <Button size="small" onClick={decCount}>-</Button>
                                </Stack>
                                <Typography gutterBottom variant="h5" component="span">${item.price}</Typography>
                            </CardActions>
                        </Card>
                            ))}
                    </Box>

                    <Box component="section"  bgcolor="#e3e3e37d" p={3} flex={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                        <Typography variant='h4' textAlign="center">Order Summry</Typography>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Typography variant=''>subtotal</Typography>
                            <Typography variant=''>$ 80</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Typography variant=''>Estimated Shapping</Typography>
                            <Typography variant=''>$ 8.90</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Typography variant=''>Shapping Discount</Typography>
                            <Typography variant=''>$ -5.90</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Typography component='b'>Total</Typography>
                            <Typography component='b'>$ 80</Typography>
                        </Stack>

                        <Button variant="contained" size="medium" width="100%">Checkout Now</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Cart
