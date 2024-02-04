import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import HomeIcon from '@mui/icons-material/Home';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import '../css/Post.css'
import Navbar from './Navbar';
import Footer from './Footer';

function Post() {
    const navigate=new useNavigate();

    return (
        <div>
            <Navbar/>
            <div class="box-1">
                <Box_1/>
            </div>
            <div class="main-div-9">
                <div class="nevigation-section">
                    <h1>Nevigate</h1>
                    <button id="nevigation-button" onClick={()=>navigate('/')}>Home</button>
                    <button id="nevigation-button" onClick={()=>navigate('/chat')}>Chat</button>
                    <button id="nevigation-button" onClick={()=>navigate('/profile')}>Profile</button>
                </div>
                <div class="cards">
                    <h1>Posts</h1>
                    <Card
                    id='card'
                    direction='column'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                    <Card
                    id='card'
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        id='card-image'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate('/profile')}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Post
