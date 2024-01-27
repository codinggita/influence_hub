const express=require('express')
const bodyParser = require('body-parser');
const app=express();
const port=5000;
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/userdata';
const dbname='practice';

mongoose.connect(url)
.then(()=>console.log("MongoDb is connected.."))
.catch((err)=>console.log(err))

const schema=mongoose.Schema;

const userprofile = new schema({
    username: String,
    email: String,
    interests: [String]
});

const model=mongoose.model('user_profile',userprofile);

app.use(express.json())
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`server has been started in port ${port}`);
});

const users = [
    {
        username: 'keen_panda',
        email: 'amy.perez@mail.com',
        password: 'p4nd4B34r',
        role: 'software_engineer'
    },
    {
        username: 'tech_wizard',
        email: 'daniel.li@techmail.co',
        password: 'c0d3M4g1c',
        role: 'software_engineer'
    },
    {
        username: 'star_athlete',
        email: 'maria.torres@athletehub.com',
        password: 'g04l53tt3r',
        role: 'football_player'
    },
    {
        username: 'word_crafter',
        email: 'noah.jones@writeup.net',
        password: 'b00kW0rm',
        role: 'writer'
    },
    {
        username: 'data_analyst',
        email: 'claire.smith@analytics.com',
        password: 'numb3r5cr4mbl3',
        role: 'data_analyst'
    },
    {
        username: 'designer_pro',
        email: 'sam.brown@designstudio.io',
        password: 'cr34t1v3G3n1u5',
        role: 'graphic_designer'
    },
    {
        username: 'marketing_maven',
        email: 'olivia.white@marketreach.com',
        password: 'br4nd1ng5t4r',
        role: 'marketing_manager'
    },
    {
        username: 'nature_explorer',
        email: 'emma.johnson@wildlife.org',
        password: 'tr33Hu9g3r',
        role: 'biologist'
    },
    {
        username: 'music_lover',
        email: 'david.lee@musicstream.com',
        password: 'm3l0dyM4k3r',
        role: 'musician'
    },
    {
        username: 'photo_enthusiast',
        email: 'sophia.taylor@photolens.net',
        password: 'l1ght5h0t',
        role: 'photographer'
    }
];

app.post('/app/user/signup', (req, res) => {
	try {
		const { username, email, password, role } = req.body;

		const existingUser = users.find(user => user.email === email);

if (existingUser) {
		return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { username, email, password, role };
    users.push(newUser);

    res.status(201).json({ message: 'User created successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
});
app.post('/app/user/login', (req, res) => {
	try {
        const { identifier, password } = req.body;
        const user = users.find(user => user.email === identifier || user.username === identifier);
        if (!user) {
            return res.status(401).json({ message: 'User not found. Please check your email or username.' });
        }
        if (user.password === password) {
            res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
        }
        else {
            res.status(401).json({ message: 'Incorrect password. Please check your password.' });
        }
	} catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
	}
});

app.get('/app/users', (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json({ users });
});

app.get('/app/user/profile/:email', (req, res) => {
const { email } = req.params;

const user = users.find(user => user.email === email);

if (!user) {
    return res.status(404).json({ message: 'User not found' });
}

res.status(200).json({ userProfile: { username: user.username, email: user.email, role: user.role } });
});

app.get('/app/users/:role', (req, res) => {
const { role } = req.params;

const usersByRole = users.filter(user => user.role === role);

if (usersByRole.length === 0) {
    return res.status(404).json({ message: 'No users found with the specified role' });
}

res.status(200).json({ users: usersByRole });
});

app.get("/app/user/influncers")
app.get("/app/user/influncers/:influencerId")
app.post("/app/user/influncers/:influencerId")
app.put("/app/user/influncers/influencer:Id/profile")
app.get("/app/user/teams")
app.get("/app/user/teams/:teamId")
app.get("/app/user/team/:teamId/profile")
app.post("/app/user/team/:teamId/profile")
app.put("/app/user/team/:teamId/profile")
app.post("/app/user/collab")
app.get("/app/user/collab")
app.get("/app/user/collab/:collabId")
app.get("/app/payment/transaction")
app.get("/app/payment/transaction/:tranId")
app.post("/app/payment/:influncerId")
app.post("/app/payment/:tranId")
app.post("/app/message")
app.delete("/app/message")
app.get("/app/message");
app.get("/app/user/:userId/message/:userId");
app.get("/app/user/:userId/chat-history");
app.get("/app/:influencerId/review")
app.post("/app/:influencerId/review")
app.patch("/app/:influencerId/review")
app.delete("/app/:influencerId/review")
