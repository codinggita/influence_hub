const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import the bcrypt package

const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://ry9826653:123456789987654321@cluster0.q1bdkdy.mongodb.net/app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    role: String,
    address: {
        section: String,
        city: String,
        postalCode: String,
        state: String,
        country: String,
        },
        company: {
        companyName: String,
        timezone: String,
        location: String,
        },
        languages: [String],
    });


const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/app/user/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
        }

        // Hash the password before saving it to the database
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ username, email, password });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    });

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });




// User login route (using hashed passwords)
app.post('/app/user/login', async (req, res) => {
    console.log('Received login request:', req.body);


    const { login, password, rememberMe } = req.body;

    try {
        const user = await User.findOne({ $or: [{ username: login }, { email: login }] });        
        // const user=true;

        console.log('Found user:', user);

        if (user) {
        // Temporarily bypass bcrypt for debugging
        // const isPasswordMatch = password === user.password;
        // const isPasswordMatch = true;

        console.log('User password:', user.password);

        // const hashedPassword = await bcrypt.hash(user.password, 10);


        // const isPasswordMatch = await bcrypt.compare(password, password);
        console.log('Password match:', isPasswordMatch);


        console.log('Password match:', isPasswordMatch);

        if (true) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            console.log('Password does not match');
            res.status(401).json({ success: false, message: 'Invalid login or password' });
        }
        } else {
        console.log('User not found');
        res.status(401).json({ success: false, message: 'Invalid login or password' });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.post('/your-backend-endpoint', async (req, res) => {
    try {
        const formData = req.body;
    
        // Create a new user document in MongoDB
        const newUser = new User(formData);
        await newUser.save();
    
        res.status(201).json({ success: true, message: 'User data submitted successfully' });
        } catch (error) {
            window.alert("cant submit",error);
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    });



app.get('/app/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Get user profile by email route
app.get('/app/user/profile/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching user profile' });
    }
});


// Get users by role route
app.get('/app/users/:role', async (req, res) => {
    try {
        const role = req.params.role.toLowerCase(); // Convert role to lowercase
        const users = await User.find({ role });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching users by role' });
    }
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
