const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import the bcrypt package

require("dotenv").config();


const app = express();
const PORT = process.env.PORT;
const mongourl=process.env.MONGOURL;

console.log(PORT);
console.log(mongourl);

mongoose.connect(`${mongourl}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

console.log(PORT);
console.log(mongourl);


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
    console.log('Connected to MongoDB');
});


const userSchema = new mongoose.Schema({
    profilephoto: String,
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

app.use(session({
    secret: 'secret-key', // Change this to a random secret key
    resave: false,
    saveUninitialized: true
}));


// app.post('/app/user/signup', async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         // Check if the email is already registered
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//         return res.status(400).json({ message: 'Email is already registered' });
//         }

//         // Hash the password before saving it to the database
//         // const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user with the hashed password
//         const newUser = new User({ username, email, password });

//         // Save the user to the database
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error during user registration:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
//     });

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });




// // User login route (using hashed passwords)
// app.post('/app/user/login', async (req, res) => {
//     console.log('Received login request:', req.body);


//     const { login, password, rememberMe } = req.body;

//     try {
//         const user = await User.findOne({ $or: [{ username: login }, { email: login }] });        
//         // const user=true;

//         console.log('Found user:', user);

//         if (user) {
//         // Temporarily bypass bcrypt for debugging
//         // const isPasswordMatch = password === user.password;
//         // const isPasswordMatch = true;

//         console.log('User password:', user.password);

//         // const hashedPassword = await bcrypt.hash(user.password, 10);


//         // const isPasswordMatch = await bcrypt.compare(password, password);
//         console.log('Password match:', isPasswordMatch);


//         console.log('Password match:', isPasswordMatch);

//         if (true) {
//             res.json({ success: true, message: 'Login successful' });
//         } else {
//             console.log('Password does not match');
//             res.status(401).json({ success: false, message: 'Invalid login or password' });
//         }
//         } else {
//         console.log('User not found');
//         res.status(401).json({ success: false, message: 'Invalid login or password' });
//         }
//     } catch (error) {
//         console.error('Authentication error:', error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });


// // Get user profile by email route
// app.get('/app/user/profile/:email', async (req, res) => {
//     try {
//         const email = req.params.email;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error fetching user profile' });
//     }
// });


// // Get users by role route
// app.get('/app/users/:role', async (req, res) => {
//     try {
//         const role = req.params.role.toLowerCase(); // Convert role to lowercase
//         const users = await User.find({ role });
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error fetching users by role' });
//     }
// });



// app.post('/app/user', (req, res) => {
//     const formData = req.body;

//     // Create a new user document in MongoDB
//     const newUser = new User(formData);
//     newUser.save()
//         .then(savedUser => {
//             // Send JSON response with the newly created user data
//             res.status(201).json({ success: true, message: 'User data submitted successfully', user: savedUser });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             res.status(500).json({ success: false, message: 'Internal Server Error' });
//         });
// });

app.post('/app/user/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate signup data
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password' });
    }

    try {
        // Create a new user document
        const newUser = new User({ username, email, password });
        await newUser.save();

        req.session.user = { username: 'exampleUser' }; 
        res.status(201).json({ message: 'User signed up successfully' });


    } catch (error) {
        console.error('Error saving user to database:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.post('/app/user/login', (req, res) => {
    const { username, password } = req.body;

    // Here you would perform authentication (e.g., check username and password against a database)
    // For demonstration purposes, we'll just check if the username and password match 'admin'
    // if (username === 'admin' && password === 'password') {
        if (true) {
        res.status(200).json({ success: true });
        console.log(req.body);
    } else {
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
});


app.post('/app/user', (req, res) => {
    const formData = req.body;

    // Check if a user with the same username already exists
    User.findOne({ username: formData.username })
        .then(existingUser => {
            if (existingUser) {
                // User with the same username already exists, send response indicating user already exists
                return res.status(400).json({ success: false, message: 'User already exists with the same username' });
            }

            // No existing user with the same username found, create a new user document in MongoDB
            const newUser = new User(formData);
            newUser.save()
                .then(savedUser => {
                    // Send JSON response with the newly created user data
                    res.status(201).json({ success: true, message: 'User data submitted successfully', user: savedUser });
                })
                .catch(error => {
                    console.error('Error:', error);
                    res.status(500).json({ success: false, message: 'Internal Server Error' });
                });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
});


app.get('/app/user', (req, res) => {
    User.find({})
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });
});

app.get('/app/user/:username',(req,res)=>{
    const {username} = req.params;
    console.log(req.params);
    if (!username) {
        return res.status(400).json({ message: 'Username parameter is required' });
    }

    User.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        });
});


app.put('/app/user/:username',(req,res)=>{
    const { username } = req.params;
    const updateFields = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username parameter is required' });
    }

    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ message: 'At least one field to update is required' });
    }

    User.findOneAndUpdate({ username }, updateFields, { new: true })
    .then(updatedUser => {
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });
});



app.delete('/app/user/:username', (req, res) => {
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({ message: 'Username parameter is required' });
    }

    User.findOneAndDelete({ username })
        .then(deletedUser => {
            if (!deletedUser) {
                // User not found, return 404 status with a message
                return res.status(404).json({ message: 'User not found' });
            }
            // User deleted successfully
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => {
            // Handle other errors (e.g., database error)
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        });
});


// app.get("/app/user/influncers")
// app.get("/app/user/influncers/:influencerId")
// app.post("/app/user/influncers/:influencerId")
// app.put("/app/user/influncers/influencer:Id/profile")
// app.get("/app/user/teams")
// app.get("/app/user/teams/:teamId")
// app.get("/app/user/team/:teamId/profile")
// app.post("/app/user/team/:teamId/profile")
// app.put("/app/user/team/:teamId/profile")
// app.post("/app/user/collab")
// app.get("/app/user/collab")
// app.get("/app/user/collab/:collabId")
// app.get("/app/payment/transaction")
// app.get("/app/payment/transaction/:tranId")
// app.post("/app/payment/:influncerId")
// app.post("/app/payment/:tranId")
// app.post("/app/message")
// app.delete("/app/message")
// app.get("/app/message");
// app.get("/app/user/:userId/message/:userId");
// app.get("/app/user/:userId/chat-history");
// app.get("/app/:influencerId/review")
// app.post("/app/:influencerId/review")
// app.patch("/app/:influencerId/review")
// app.delete("/app/:influencerId/review")
