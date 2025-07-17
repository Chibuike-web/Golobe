import { Link, useNavigate } from "react-router-dom";
import GolobeLogo from "../assets/authentication/LogoWhiteBackground.svg";
import { FacebookIcon, GoogleIcon, AppleIcon, Eye, EyeSlash } from "../Icons";
import { useCarousel, useFormState } from "../Hooks";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import image1 from "../assets/authentication/SwimmingPool.webp";
import image2 from "../assets/authentication/Airplane.webp";
import {
	validateConfirmPassword,
	validateEmail,
	validateFirstName,
	validateLastName,
	validatePassword,
	validatePhoneNumber,
	validateTermsAccepted,
} from "./validations";

const images = [image1, image2, image1, image2];

export default function Signup() {
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [registrationError, setRegistrationError] = useState("");
	const submitRef = useRef(false);

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
		handleFocus,
		setFocusedInput,
		focusedInput,
	} = useFormState();

	const togglePasswordVisibility = (id: string) => {
		if (id === "password") {
			setShowPassword(!showPassword);
		}
		if (id === "confirmPassword") {
			setShowConfirmPassword(!showConfirmPassword);
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

	const handleBlur = (id: string, value: string) => {
		setFocusedInput(null);

		if (!submitRef.current) return;
		if (id === "email") {
			const error = validateEmail(value);
			setEmailError(error);
		} else if (id === "password") {
			const error = validatePassword(value);
			setPasswordError(error);
		} else if (id === "firstName") {
			const error = validateFirstName(value);
			setFirstNameError(error);
		} else if (id === "lastName") {
			const error = validateLastName(value);
			setLastNameError(error);
		} else if (id === "termsAccepted") {
			const error = validateTermsAccepted(termsAccepted);
			setTermsAcceptedError(error);
		} else if (id === "confirmPassword") {
			const error = validateConfirmPassword(value, password);
			setConfirmPasswordError(error);
		}
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("click");

		submitRef.current = true;

		let firstNameErr = "";
		let lastNameErr = "";
		let phoneNumberErr = "";
		let termsAcceptedErr = "";
		let emailErr = "";
		let passwordErr = "";
		let confirmPasswordErr = "";

		firstNameErr = validateFirstName(firstName);
		lastNameErr = validateLastName(lastName);
		emailErr = validateEmail(email);
		phoneNumberErr = validatePhoneNumber(phoneNumber);
		termsAcceptedErr = validateTermsAccepted(termsAccepted);
		passwordErr = validatePassword(password);
		confirmPasswordErr = validateConfirmPassword(confirmPassword, password);

		setFirstNameError(firstNameErr);
		setLastNameError(lastNameErr);
		setPhoneNumberError(phoneNumberErr);
		setTermsAcceptedError(termsAcceptedErr);
		setEmailError(emailErr);
		setPasswordError(passwordErr);
		setConfirmPasswordError(confirmPasswordErr);

		const errors = [
			firstNameErr,
			lastNameErr,
			phoneNumberErr,
			termsAcceptedErr,
			emailErr,
			passwordErr,
			confirmPasswordErr,
		];

		if (errors.some(Boolean)) return;

		const userData = {
			firstName,
			lastName,
			email,
			phoneNumber,
			password,
		};

		try {
			const res = await fetch("http://localhost:5000/api/auth/register", {
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
			console.log("Registration successful:", data.message);

			navigate(`/verify-code/${data.user.id}`);
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	const { imageIndex, handleCarousel } = useCarousel(images);

	return (
		<main className="w-full m-[104px] max-w-[77rem] mx-auto flex gap-[104px] lg:flex-col lg:px-4">
			<section className="lg:hidden">
				<figure className="w-[488px] h-[816px] rounded-[30px] overflow-hidden relative">
					<AnimatePresence>
						<motion.img
							key={images[imageIndex]}
							src={images[imageIndex]}
							initial={{ opacity: 0, x: 488 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -488 }}
							transition={{ duration: 0.5 }}
							className="w-full h-full object-cover absolute top-0 left-0"
						/>
					</AnimatePresence>

					<div className="absolute bottom-6 flex gap-[8px] left-1/2 -translate-x-1/2">
						{images.map((_, index) => (
							<motion.button
								animate={{
									width: index === imageIndex ? 32 : 10,
									backgroundColor: index === imageIndex ? "#53F2C7" : "#FFFFFF",
								}}
								transition={{ duration: 0.3, ease: "easeOut" }}
								aria-label={`Go to slide ${index + 1}`}
								key={index}
								className={`block rounded-full ${
									index === imageIndex ? "bg-mintGreen w-8 h-[10px]" : "bg-white size-[10px]"
								}`}
								onClick={() => handleCarousel(index)}
							/>
						))}
					</div>
				</figure>
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
								<motion.label
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: "-50%" }}
									transition={{ duration: 0.2, ease: "easeOut" }}
									htmlFor="firstName"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									First Name
								</motion.label>
							)}
							<input
								id="firstName"
								value={firstName}
								type="text"
								placeholder={`${
									focusedInput === "firstName" || firstName ? "" : "Enter your first name"
								}`}
								className="border border-[#79747e]"
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{firstNameError && <p className="text-red-600 text-[14px] mt-2">{firstNameError}</p>}
						</div>

						{/* Last Name */}
						<div className="relative w-full">
							{(focusedInput === "lastName" || lastName) && (
								<motion.label
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: "-50%" }}
									transition={{ duration: 0.2, ease: "easeOut" }}
									htmlFor="lastName"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Last Name
								</motion.label>
							)}
							<input
								id="lastName"
								value={lastName}
								type="text"
								placeholder={`${
									focusedInput === "lastName" || lastName ? "" : "Enter your last name"
								}`}
								className="border border-[#79747e]"
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{lastNameError && <p className="text-red-600 text-[14px] mt-2">{lastNameError}</p>}
						</div>

						{/* Email */}
						<div className="relative w-full">
							{(focusedInput === "email" || email) && (
								<motion.label
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: "-50%" }}
									transition={{ duration: 0.2, ease: "easeOut" }}
									htmlFor="email"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Email
								</motion.label>
							)}
							<input
								id="email"
								value={email}
								type="email"
								placeholder={`${focusedInput === "email" || email ? "" : "Enter your email"}`}
								className="border border-[#79747e]"
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							{emailError && <p className="text-red-600 text-[14px] mt-2">{emailError}</p>}
						</div>

						{/* Phone Number */}
						<div className="relative w-full">
							{(focusedInput === "phoneNumber" || phoneNumber) && (
								<motion.label
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: "-50%" }}
									transition={{ duration: 0.2, ease: "easeOut" }}
									htmlFor="phoneNumber"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Phone Number
								</motion.label>
							)}
							<input
								id="phoneNumber"
								value={phoneNumber}
								type="tel"
								placeholder={`${
									focusedInput === "phoneNumber" || phoneNumber ? "" : "Enter your phone number"
								}`}
								className="border border-[#79747e]"
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
							<motion.label
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: "-50%" }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								htmlFor="password"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Password
							</motion.label>
						)}
						<div className="relative">
							<input
								id="password"
								value={password}
								type={showPassword ? "text" : "password"}
								placeholder={`${
									focusedInput === "password" || password ? "" : "Enter your password"
								}`}
								className="border border-[#79747e]"
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
							<motion.label
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: "-50%" }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								htmlFor="confirmPassword"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Confirm Password
							</motion.label>
						)}
						<div className="relative">
							<input
								id="confirmPassword"
								value={confirmPassword}
								type={showConfirmPassword ? "text" : "password"}
								placeholder={`${focusedInput === "confirmPassword" ? "" : "Confirm your password"}`}
								className="border border-[#79747e]"
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
							<label htmlFor="termsAccepted" className="text-[0.875rem] font-medium">
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
