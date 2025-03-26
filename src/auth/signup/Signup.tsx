import { Link, useNavigate } from "react-router-dom";
import GolobeLogo from "../../assets/Authentication/LogoWhiteBackground.svg";
import styles from "./Signup.module.css";
import { FacebookIcon, GoogleIcon, AppleIcon, Eye, EyeSlash } from "../../assets/Icons";
import { useFormState } from "../../Hooks";
import { useEffect, useState } from "react";

export default function Signup() {
	const navigate = useNavigate();

	const {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		phoneNumber,
		setPhoneNumber,
		email,
		setEmail,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
		termsAccepted,
		setTermsAccepted,
		firstNameError,
		setFirstNameError,
		lastNameError,
		setLastNameError,
		emailError,
		setEmailError,
		passwordError,
		setPasswordError,
		confirmPasswordError,
		setConfirmPasswordError,
		phoneNumberError,
		setPhoneNumberError,
		termsAcceptedError,
		setTermsAcceptedError,
	} = useFormState();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [focusedInput, setFocusedInput] = useState<string | null | boolean>(null);
	const [registrationError, setRegistrationError] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		const userData = localStorage.getItem("user");

		if (token && userData) {
			const parsedUser = JSON.parse(userData);
			console.log("User already registered. Token:", token);
			console.log("Registered user details:", parsedUser);
		}
	}, []);

	const togglePasswordVisibility = (id: string) => {
		if (id === "password") {
			setShowPassword(!showPassword);
		} else if (id === "confirmPassword") {
			setShowConfirmPassword(!showConfirmPassword);
		}
	};

	const handleFocus = (id: string) => {
		setFocusedInput(id);
	};

	const handleBlur = (id: string, value: string) => {
		if (!value.trim() && focusedInput === id) {
			setFocusedInput(null);
		}
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value, checked } = target;

		switch (id) {
			case "firstName":
				setFirstName(value);
				if (value.trim()) setFirstNameError("");
				break;
			case "lastName":
				setLastName(value);
				if (value.trim()) setLastNameError("");
				break;
			case "email":
				setEmail(value);
				if (value.trim() && value.includes("@")) setEmailError("");
				break;
			case "phoneNumber":
				if (!Number.isNaN(Number(value)) && value.length <= 11) {
					setPhoneNumber(value);
					if (value.trim()) setPhoneNumberError("");
				}
				break;
			case "password":
				setPassword(value);
				if (value.length > 0) setPasswordError("");
				break;
			case "confirmPassword":
				setConfirmPassword(value);
				if (value === password) setConfirmPasswordError("");
				break;
			case "termsAccepted":
				setTermsAccepted(checked);
				if (checked) setTermsAcceptedError("");
				break;
			default:
				console.warn(`Unhandled field: ${id}`);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic Validation
		if (!firstName) setFirstNameError("First name is required");
		if (!lastName) setLastNameError("Last name is required");
		if (!email) setEmailError("Email is required");
		if (!password) setPasswordError("Password is required");
		if (password !== confirmPassword) setConfirmPasswordError("Passwords do not match");
		if (!termsAccepted) setTermsAcceptedError("You must accept the terms and conditions");

		// Email validation
		if (email.length === 0) {
			setEmailError("Email is required");
		} else if (email.length < 6) {
			setEmailError("Email should be minimum 6 characters");
		} else if (email.indexOf(" ") >= 0) {
			setEmailError("Email cannot contain spaces");
		} else {
			setEmailError("");
		}

		// Password validation
		if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters");
		} else {
			setPasswordError("");
		}

		// If there are any errors, stop the submission
		if (
			firstNameError ||
			lastNameError ||
			emailError ||
			passwordError ||
			confirmPasswordError ||
			termsAcceptedError
		) {
			return;
		}

		// Prepare the data to send to the backend
		const userData = {
			firstName,
			lastName,
			email,
			phoneNumber,
			password,
		};

		try {
			// Send the data to the backend using fetch
			const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!res.ok) {
				const errorData = await res.json();
				setRegistrationError(errorData.message);
				throw new Error(errorData.message || "Registration failed");
			}
			const data = await res.json();
			console.log("Registration successful:", data);

			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(userData));

			navigate("/login");
		} catch (error) {
			console.error("Registration error:", (error as any).message);
		}
	};

	return (
		<main className="w-full m-[104px] max-w-[77rem] mx-auto flex gap-[104px] lg:flex-col lg:px-4">
			<section className="lg:hidden">
				<figure className={` w-[488px] h-[816px] rounded-[30px]  ${styles.image}`}></figure>
			</section>
			<section className="w-full ">
				<figure className="mb-16">
					<img src={GolobeLogo} alt="Golobe Logo" />
				</figure>
				<header>
					{registrationError && (
						<div className="mb-4 p-4 bg-yellow-100 text-yellow-800">{registrationError}</div>
					)}

					<h1 className="font-primary font-bold text-[40px] mb-4">Sign Up</h1>
					<p className="mb-12">
						Let’s get you all signed up so you can access your personal account.
					</p>
				</header>
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-6 mb-6 md:grid-cols-1">
						{/* First Name */}
						<div className="relative w-full">
							{(focusedInput === "firstName" || firstName) && (
								<label
									htmlFor="firstName"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									First Name
								</label>
							)}
							<input
								id="firstName"
								value={firstName}
								type="text"
								placeholder={`${
									focusedInput === "firstName" || firstName ? "" : "Enter your first name"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{firstNameError && <p className="text-red-600 text-[14px] mt-2">{firstNameError}</p>}
						</div>

						{/* Last Name */}
						<div className="relative w-full">
							{(focusedInput === "lastName" || lastName) && (
								<label
									htmlFor="lastName"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Last Name
								</label>
							)}
							<input
								id="lastName"
								value={lastName}
								type="text"
								placeholder={`${
									focusedInput === "lastName" || lastName ? "" : "Enter your last name"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{lastNameError && <p className="text-red-600 text-[14px] mt-2">{lastNameError}</p>}
						</div>

						{/* Email */}
						<div className="relative w-full">
							{(focusedInput === "email" || email) && (
								<label
									htmlFor="email"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Email
								</label>
							)}
							<input
								id="email"
								value={email}
								type="email"
								placeholder={`${focusedInput === "email" || email ? "" : "Enter your email"}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{emailError && <p className="text-red-600 text-[14px] mt-2">{emailError}</p>}
						</div>

						{/* Phone Number */}
						<div className="relative w-full">
							{(focusedInput === "phoneNumber" || phoneNumber) && (
								<label
									htmlFor="phoneNumber"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Phone Number
								</label>
							)}
							<input
								id="phoneNumber"
								value={phoneNumber}
								type="tel"
								placeholder={`${
									focusedInput === "phoneNumber" || phoneNumber ? "" : "Enter your phone number"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{phoneNumberError && (
								<p className="text-red-600 text-[14px] mt-2">{phoneNumberError}</p>
							)}
						</div>
					</div>

					{/* Password */}
					<div className="relative w-full mb-6">
						{(focusedInput === "password" || password) && (
							<label
								htmlFor="password"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Password
							</label>
						)}
						<div className="relative">
							<input
								id="password"
								value={password}
								type={showPassword ? "text" : "password"}
								placeholder={`${
									focusedInput === "password" || password ? "" : "Enter your password"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							<button
								type="button"
								className="absolute right-[16px] top-[50%] -translate-y-1/2"
								onClick={() => togglePasswordVisibility("password")}
							>
								{showPassword ? <EyeSlash /> : <Eye />}
							</button>
						</div>
						{passwordError && <p className="text-red-600 text-[14px] mt-2">{passwordError}</p>}
					</div>

					{/* Confirm Password */}
					<div className="relative w-full mb-6">
						{(focusedInput === "confirmPassword" || confirmPassword) && (
							<label
								htmlFor="confirmPassword"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Confirm Password
							</label>
						)}
						<div className="relative">
							<input
								id="confirmPassword"
								value={confirmPassword}
								type={showConfirmPassword ? "text" : "password"}
								placeholder={`${
									focusedInput === "confirmPassword" || confirmPassword
										? ""
										: "Confirm your password"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							<button
								type="button"
								className="absolute right-[16px] top-[50%] -translate-y-1/2"
								onClick={() => {
									togglePasswordVisibility("confirmPassword");
								}}
							>
								{showConfirmPassword ? <EyeSlash /> : <Eye />}
							</button>
						</div>
						{confirmPasswordError && (
							<p className="text-red-600 text-[14px] mt-2">{confirmPasswordError}</p>
						)}
					</div>

					{/* Accept Terms and Conditions */}
					<div className="my-4">
						<div className="flex items-center">
							<input
								id="termsAccepted"
								type="checkbox"
								checked={termsAccepted}
								onChange={handleChange}
								className="mr-2"
							/>
							<label htmlFor="terms" className="text-[0.875rem] font-medium">
								I agree to all the <span className="text-slamon font-semibold">Terms</span> and{" "}
								<span className="text-slamon font-semibold">Privacy Policies</span>
							</label>
						</div>
						{termsAcceptedError && (
							<p className="text-red-600 mt-2 text-[14px]">{termsAcceptedError}</p>
						)}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-mintGreen text-blackishGreen text-[0.875rem] font-medium p-2 rounded w-full py-4"
					>
						Create Account
					</button>
				</form>

				<footer className="mt-4 flex flex-col items-center text-[0.875rem] gap-10">
					<p>
						Already have an account?{" "}
						<Link to="/login" className="text-slamon font-semibold">
							Login
						</Link>
					</p>
					<div className="flex items-center gap-2 w-full">
						<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
						<p className="text-nowrap leading-[1] text-[0.875rem] text-blackishGreen opacity-50">
							Or Sign up with
						</p>
						<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					</div>
					<div className="flex gap-2 w-full">
						<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
							<FacebookIcon color="#1877F2" />
						</button>
						<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
							<GoogleIcon />
						</button>
						<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
							<AppleIcon />
						</button>
					</div>
				</footer>
			</section>
		</main>
	);
}
