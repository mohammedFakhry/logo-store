import React from 'react'
import styled from '@emotion/styled';



const AppBar = styled('div')(({ theme }) => ({
    textAlign: 'center',
    padding: '5px 0',
    backgroundColor: 'teal',
    color: 'white'
}));


const Announcement = () => {
    return (
        <AppBar >
            Lorem, ipsum dolor sit amet.
        </AppBar>
    )
}

export default Announcement