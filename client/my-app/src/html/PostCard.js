import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


export default function PostCard({title,description,image,username}) {

    const navigate=new useNavigate();

    return (
        <div>
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
                        src={image}
                        alt={title}
                    />
                    <Stack>
                        <CardBody>
                        <Heading size='md'>{title} ___________________________<span>{username}</span></Heading>

                        <Text py='2'>
                            {description}
                        </Text>
                        </CardBody>

                        <CardFooter>
                        <Button id="card-button" variant='solid' colorScheme='blue' onClick={()=>navigate(`/profile/?username=${username}`)}>
                            View Profile
                        </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
        </div>
    )
}
