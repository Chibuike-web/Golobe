const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// Register a new user
app.post("/api/auth/register", async (req, res) => {
	const { firstName, lastName, email, phoneNumber, password } = req.body;

	// Check if the user already exists
	const existingUser = users.find((user) => user.email === email);
	if (existingUser) {
		return res.status(400).json({ message: "User already exists" });
	}

	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user object
	const newUser = {
		id: Date.now().toString(),
		firstName,
		lastName,
		email,
		phoneNumber,
		password: hashedPassword,
	};

	// Add the user to the "database"
	users.push(newUser);

	// Generate a JWT token
	const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});

	res.status(201).json({ token });
});

// Login a user
app.post("/api/auth/login", async (req, res) => {
	const { email, password } = req.body;

	// Find the user in the "database"
	const user = users.find((user) => user.email === email);
	if (!user) {
		return res.status(400).json({ message: "Invalid email" });
	}

	// Compare the password
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return res.status(400).json({ message: "Invalid password" });
	}

	// Generate a JWT token
	const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});

	res.status(200).json({ token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
