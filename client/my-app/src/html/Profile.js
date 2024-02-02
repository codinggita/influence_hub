import React from 'react'
import '../css/Profile.css'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box } from '@mui/material';


function Profile() {
    const nevigate=new useNavigate();
    return (
        <div>
            <Box_1/>
            <div class="main-div-8">
                <div class="main-content-5">
                    <div id="profile-description">
                        <img id="profile-photo" src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww' alt='profile-photo'></img>
                        <h1>Id</h1>
                        <p>Name</p>
                        <p>description</p>
                    </div>
                    <div id="profile-feature">
                        <div id="review">
                            <h1>Review</h1>
                        </div>
                        <div id="chat-box">
                            <h1>Chats</h1>
                            {/* <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Section 1 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                </Accordion> */}
                                <Tabs>
                                    <TabList>
                                        <Tab>One</Tab>
                                        <Tab>Two</Tab>
                                        <Tab>Three</Tab>
                                    </TabList>

                                    <TabPanels>
                                        <TabPanel>
                                        <p>one!</p>
                                        </TabPanel>
                                        <TabPanel>
                                        <p>two!</p>
                                        </TabPanel>
                                        <TabPanel>
                                        <p>three!</p>
                                        </TabPanel>
                                    </TabPanels>
                                    </Tabs>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <p>sfhdjlsdfodkjfsolk</p>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats">
                                <h4>Chat 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Profile 
