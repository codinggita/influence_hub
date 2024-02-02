import React from 'react'
import '../css/About.css'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';


function About() {
    const navigate=new useNavigate();
    return (
        <div>
            <Box_1/>
            <div>
            <div className="about-page">
                <h1>Welcome to <span style={{ color: '#e74c3c' }}>Influencer Hub</span></h1>
                <div class="about-content">
                    <p>
                        Influencer Hub is not just a platform; it's a community that brings influencers and brands together. 
                        Our mission is to empower influencers to make a meaningful impact and help brands build authentic connections with their audience.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where influencers can express their creativity, share their unique stories, and collaborate with brands that share their values.
                    </p>
                    <h2>What Sets Us Apart</h2>
                    <ul>
                        <li>We believe in the power of authenticity and genuine connections.</li>
                        <li>Our platform offers innovative tools for influencers and brands to create impactful collaborations.</li>
                        <li>Join us and be a part of a community that values creativity, diversity, and positive influence.</li>
                    </ul>
                    <p>
                        Ready to embark on a journey with Influencer Hub? <button id="joinnow" onClick={()=>navigate('/signup')}>Join Now</button>
                    </p>
                </div>

                {/* Image Section */}
                <div className="image-section">
                    <img src="https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rfGVufDB8fDB8fHww" alt="Image 1" />
                    <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtfGVufDB8fDB8fHww" alt="Image 2" />
                    <img src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlrdG9rfGVufDB8fDB8fHww" alt="Image 3" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
