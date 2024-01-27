const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://ry9826653:123456789987654321@cluster0.q1bdkdy.mongodb.net/studentdb');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

app.use(bodyParser.json());

// GET all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new student
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    try {
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT (update) a student
app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PATCH (partial update) a student (same as PUT in this case)
app.patch('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a student
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        res.json(deletedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});