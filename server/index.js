const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://ry9826653:123456789987654321@cluster0.q1bdkdy.mongodb.net/app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define your User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String }
});

const User = mongoose.model('User', userSchema);


// User signup route
app.post('/app/user/signup', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Ensure that email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = new User({ email, password, role });

        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating user' });
    }
});


// User login route (using plain text comparison for password)
app.post('/app/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (password === user.password) { // Plain text password comparison
            // If authentication is successful, generate a token or session for the user
            res.status(200).json({ message: 'User logged in successfully' });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in' });
    }
});


// User login route (using hashed passwords)
app.post('/app/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            res.status(200).json({ message: 'User logged in successfully' });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in' });
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
