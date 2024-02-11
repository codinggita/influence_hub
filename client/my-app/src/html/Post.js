import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import '../css/Post.css'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import PostCard from './PostCard';


const domain=process.env.REACT_APP_DOMAIN;



function Post() {
    const navigate=new useNavigate();

    const [posts, setPosts] = useState([]);
    // const [formData, setFormData] = useState({
    //     username:'',
    //     title: '',
    //     description: '',
    //     image: null,
    // });

    useEffect(() => {
        // Fetch all posts from the backend
        const fetchPosts = async () => {
        try {
            const response = await axios.get(`${domain}/app/posts`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="box-1">
                <Box_1/>
            </div>
            <div className="main-div-9">
                <div className="nevigation-section">
                    <h1>Nevigate</h1>
                    <button id="nevigation-button" onClick={()=>navigate('/')}>Home</button>
                    <button id="nevigation-button" onClick={()=>navigate('/chat')}>Chat</button>
                    <button id="nevigation-button" onClick={()=>navigate('/profile')}>Profile</button>
                </div>
                <div className="cards">
                    <div>
                    <h1>ALL Posts</h1>
                    {posts.map(post => (
                        <PostCard key={post._id} title={post.title} description={post.description} image={post.imageUrl} username={post.username} />
                    ))}
                    </div>
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
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Post
