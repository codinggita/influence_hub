const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import the bcrypt package


require("dotenv").config();


const app = express();
const PORT = 5000;
// const mongourl=process.env.MONGOURL;

// console.log(PORT);
// console.log(mongourl);

mongoose.connect(`mongodb+srv://ry9826653:123456789987654321@cluster0.q1bdkdy.mongodb.net/app`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// console.log(PORT);
// console.log(mongourl);


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
    description: String,
    rememberMe: Boolean,
    });


const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());


const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
        },
        time: {
        type: Date,
        default: Date.now
        }
    });
    
    const chatRoomSchema = new mongoose.Schema({
        chatId: {
        type: String,
        required: true,
        unique: true
        },
        username: {
        type: String,
        required: false
        },
        destinationUsername: {
        type: String,
        required: false
        },
        messages: [messageSchema]
    });
    
    const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

// **********************************************************************
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const router = express.Router();

const postSchema = new mongoose.Schema({
    username: String,
    title: String,
    description: String,
    imageUrl: String,
});
    
const Post = mongoose.model('Post', postSchema);
    
    // Configure Cloudinary
    cloudinary.config({ 
        cloud_name: 'dav5sgqts', 
        api_key: '178322753313299', 
        api_secret: 'nBOcwOzGAVQUCGDKDpMQoWr0iZE' 
    });
    
// Configure Multer storage engine for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'YOUR_FOLDER', // optional, folder in Cloudinary where the images will be stored
      allowed_formats: ['jpg', 'jpeg', 'png'], // optional, allowed image formats
      // other optional parameters
    },
    });
    
    // Create Multer parser
    const parser = multer({ storage: storage });

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

// app.post('/app/user/signup', async (req, res) => {
//     const { username, email, password ,} = req.body;

//     // Validate signup data
//     if (!username || !email || !password) {
//         return res.status(400).json({ message: 'Please provide username, email, and password' });
//     }

//     try {
//         // Create a new user document
//         const newUser = new User({ username, email, password });
//         await newUser.save();

//         req.session.user = { username: 'exampleUser' }; 
//         res.status(201).json({ message: 'User signed up successfully' });


//     } catch (error) {
//         console.error('Error saving user to database:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

app.post('/app/user/signup', async (req, res) => {
    try {
      // Create new user document
        const user = new User(req.body);
        // Save user to MongoDB
        await user.save();
        res.status(201).json({ message: 'User signed up successfully', user });
        } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Internal server error' });
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

// ******************************************************** Chat 


app.get('/api/chat-rooms', async (req, res) => {
    try {
        const chatRooms = await ChatRoom.find();
        res.json(chatRooms);
        } catch (error) {
        console.error('Error fetching chat rooms:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });
    
    // app.post('/api/chat-rooms', async (req, res) => {
    //     const { chatId, senderId, receiverId } = req.body;
    //     try {
    //     const chatRoom = new ChatRoom({ chatId, username, destinationUsername, messages: [] });
    //     await chatRoom.save();
    //     res.status(201).json(chatRoom);
    //     } catch (error) {
    //     console.error('Error creating chat room:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    //     }
    // });

    app.post('/api/chat-rooms', async (req, res) => {
        const { chatId, senderId, receiverId } = req.body;
    
        try {
            // Check if the chat room already exists
            const existingChatRoom = await ChatRoom.findOne({ chatId });
            if (existingChatRoom) {
                return res.status(400).json({ error: 'Chat room already exists' });
            }
    
            // Create a new chat room
            const chatRoom = new ChatRoom({
                chatId,
                senderId,
                receiverId,
                messages: []
            });
    
            // Save the new chat room to the database
            await chatRoom.save();
    
            // Return the newly created chat room
            res.status(201).json(chatRoom);
        } catch (error) {
            console.error('Error creating chat room:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    

    // app.get('/api/chat-rooms/:chatId/history', async (req, res) => {
    //     const { chatId } = req.params;
    //     try {
    //         const chatRoom = await ChatRoom.findOne({ chatId });
    //         if (!chatRoom) {
    //             return res.status(404).json({ error: 'Chat room not found' });
    //         }
    //         res.json(chatRoom.messages);
    //         } catch (error) {
    //         console.error('Error fetching chat history:', error);
    //         res.status(500).json({ error: 'Internal server error' });
    //         }
    //     });
    
// Backend route for sending messages
app.post('/api/chat-rooms/:chatId/send-message', async (req, res) => {
    const { chatId } = req.params;
    const { text, senderUsername, destinationUsername, time } = req.body;
    try {
        const chatRoom = await ChatRoom.findOneAndUpdate(
            { chatId },
            { $push: { messages: { text, senderUsername, destinationUsername, time } } },
            { new: true }
        );
        res.json(chatRoom);
        } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });
    
    // Backend route for fetching chat history
    app.get('/api/chat-rooms/:chatId/history', async (req, res) => {
        const { chatId } = req.params;
        try {
        const chatRoom = await ChatRoom.findOne({ chatId });
        if (!chatRoom) {
            return res.status(404).json({ error: 'Chat room not found' });
        }
        res.json(chatRoom.messages);
        } catch (error) {
        console.error('Error fetching chat history:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });


    // *********************************************************************
    

    // app.post('/app/posts', upload.single('image'), async (req, res) => {
    //     console.log(req.body);
    //     try {
    //         // Check if file is uploaded
    //         if (!req.file) {
    //             return res.status(400).json({ error: 'No file uploaded' });
    //         }
            
    //         // Upload image to Cloudinary
    //         const result = await cloudinary.uploader.upload(req.file.path, {
    //             folder: 'posts', // optional, folder in Cloudinary where the images will be stored
    //         });
    
    //         // Create new post document
    //         const post = new Post({
    //             username: req.body.username,
    //             title: req.body.title,
    //             description: req.body.description,
    //             imageUrl: result.secure_url,
    //         });
    
    //         // Save post to MongoDB
    //         await post.save();
    
    //         res.status(201).json({ message: 'Post created successfully', post });
    //     } catch (error) {
    //         console.error('Error creating post:', error);
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // });

    app.post('/app/posts', parser.single('image'), async (req, res) => {
            try {
            // Check if file is uploaded
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }
            
            // Upload image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'posts', // optional, folder in Cloudinary where the images will be stored
            });
        
            // Create new post document
            const post = new Post({
                username: req.body.username,
                title: req.body.title,
                description: req.body.description,
                imageUrl: result.secure_url,
            });
        
            // Save post to MongoDB
            await post.save();
        
            res.status(201).json({ message: 'Post created successfully', post });
            } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({ error: 'Internal server error' });
            }
        });


        app.get('/app/posts', async (req, res) => {
            try {
                const posts = await Post.find();
                res.json(posts);
                console.log("accssed this",posts);
                } catch (error) {
                console.error('Error fetching posts:', error);
                res.status(500).json({ error: 'Internal server error' });
                }
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
