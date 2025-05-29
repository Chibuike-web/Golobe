import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// Register a new user
app.post("/api/auth/register", async (req, res) => {
	const { firstName, lastName, email, phoneNumber, password } = req.body;

	const existingUser = users.find((user) => user.email === email);
	if (existingUser) {
		return res.status(400).json({ message: "User already exists" });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = {
		id: uuidv4(),
		firstName,
		lastName,
		email,
		phoneNumber,
		password: hashedPassword,
	};

	users.push(newUser);
	console.log(users);

	res.status(201).json({ message: "User registered" });
});

// Login a user
app.post("/api/auth/login", async (req, res) => {
	const { email, password } = req.body;

	const user = users.find((user) => user.email === email);
	if (!user) {
		return res.status(400).json({ message: "Email does not exist" });
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return res.status(400).json({ message: "Incorrect password" });
	}

	return res.status(200).json({ message: "User authenticated" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
