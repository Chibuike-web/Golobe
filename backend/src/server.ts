import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { generateOTP } from "./utils";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
	isVerified: boolean;
	code?: string;
};

const users: User[] = [];

// Send user
app.get("/auth/users/:id", async (req, res) => {
	const id = req.params.id;
	const user = users.find((u) => u.id === id);
	if (!user) return res.status(400).json({ message: "User does not exist" });
	res.status(200).json({ message: "User exist", user: user });
});

// Register a new user
app.post("/api/auth/register", async (req, res) => {
	try {
		const { firstName, lastName, email, phoneNumber, password } = req.body;
		if (!firstName || !lastName || !email || !phoneNumber || !password) {
			return res.status(400).json({ message: "Missing required fields" });
		}
		const existingUser = users.find((user) => user.email === email);
		if (existingUser) {
			return res.status(400).json({ message: "User already exists", user: existingUser });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser: User = {
			id: uuidv4(),
			firstName,
			lastName,
			email,
			phoneNumber,
			password: hashedPassword,
			isVerified: false,
		};

		users.push(newUser);
		console.log(users);

		const otp = generateOTP();
		console.log(otp);
		newUser.code = otp;

		res.status(201).json({ message: "User registered", user: newUser });
	} catch (err) {
		console.error("Error registering user:", err);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Verify user

app.post("/api/auth/verify", async (req, res) => {
	const { id, code } = req.body;
	try {
		const user = users.find((u) => u.id === id);
		if (!user) return res.status(404).json({ message: "User not found" });
		if (user.isVerified) {
			return res.status(409).json({ message: "User has been verified" });
		}
		const isCodeExist = user?.code;

		if (isCodeExist && isCodeExist !== code) {
			return res
				.status(400)
				.json({ message: "The OTP you entered is incorrect. Please try again." });
		}
		if (user) {
			user.isVerified = true;
		}
		res.status(200).json({ message: "user verified", id: id });
	} catch (error) {
		console.error("Error verifying user:", error);
		res.status(500).json({ message: "Failed to verify" });
	}
});

// Login a user
app.post("/api/auth/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = users.find((user) => user.email === email);
		if (!user) {
			return res.status(400).json({ message: "Email does not exist" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Incorrect password" });
		}

		if (!user.isVerified) {
			return res.status(409).json({ message: "User has not been verified" });
		}

		return res.status(200).json({ message: "User Authenticated", id: user.id });
	} catch (error) {
		console.error("Login error:", error);
		return res.status(500).json({ message: "Something went wrong" });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
