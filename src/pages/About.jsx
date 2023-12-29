import React from 'react'
import NewsLetter from '../components/NewsLetter'
import { Box, Typography } from '@mui/material'
import aboutImg from '../image/about.jpg'


const About = () => {
    console.log(aboutImg)
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    height: 500,
                    margin: "20px auto",
                }}
                className='about-img-container'
                >
            </Box>

            <Typography variant="body1" width="75%" m="10px auto" gutterBottom>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ipsa fugiat omnis quis non. Sunt, quam? Odio beatae alias aperiam, ratione similique cum. Amet aliquid dolores, mollitia quidem unde aperiam culpa minima laboriosam sit non totam, odio quos numquam eum excepturi necessitatibus exercitationem obcaecati, modi id harum recusandae iusto officia officiis. Eius perferendis quidem, reprehenderit atque iusto dolorum labore qui, fugit rerum, velit natus animi consequatur! Rem minus harum eius neque. Est sunt magni voluptatem officia iste, adipisci ratione aliquid placeat molestias maxime ipsa suscipit ea quam totam dolorum blanditiis quis nostrum repellat magnam architecto sequi porro inventore dicta. Minus nulla et ea labore officia at ex, dolores odit accusamus obcaecati! Dignissimos, temporibus quae. Ea quos fuga dolor totam possimus tenetur eos, a accusamus ullam beatae quisquam id magni non facilis nemo laborum debitis deserunt at, obcaecati, velit sunt? Ipsam odit consequatur beatae eligendi quia, magnam, itaque voluptatibus veniam officiis, error dolores? Quisquam veritatis cum minus soluta officia tempora temporibus perferendis dicta delectus? Cupiditate et magnam accusantium excepturi praesentium. Doloribus accusamus at ex consectetur soluta earum nihil dolore a minima dolorum impedit quam iure quod, reiciendis quaerat aliquid vitae voluptates culpa iusto. Eum modi assumenda voluptas aut deserunt. Reiciendis optio minus placeat, architecto deleniti velit alias minima ratione voluptatum praesentium. Nobis ad eius obcaecati tempore perferendis delectus amet similique repellat dicta quisquam distinctio possimus reprehenderit ipsum, rerum ipsam qui ipsa, hic dolorem modi aut quidem dolores nesciunt aliquid. Eum reprehenderit voluptatem iste! Repellat eligendi iste consequatur facere quo repellendus harum sequi vel tempora magnam incidunt magni, quaerat culpa labore natus a inventore ducimus sed quisquam quas placeat praesentium nihil maxime unde. Rem enim tenetur placeat, facilis, nemo voluptate, dolor iusto ut laborum id numquam. Facilis reiciendis ex nobis expedita quas architecto ducimus pariatur veniam dolore perferendis, fugit suscipit earum natus!
            </Typography>


            <NewsLetter />
        </div>
    )
}

export default About