import { Link } from "react-router-dom";
import GolobeLogo from "../assets/authentication/LogoWhiteBackground.svg";
import { FacebookIcon, GoogleIcon, AppleIcon, Eye, EyeSlash } from "../Icons";
import { useCarousel, useFormState } from "../Hooks";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import image1 from "../assets/authentication/SwimmingPool.webp";
import image2 from "../assets/authentication/Airplane.webp";
import { validateEmail, validatePassword } from "./validations";

const images = [image1, image2, image1, image2];
export default function Login() {
	const {
		email,
		focusedInput,
		password,
		emailError,
		passwordError,
		setEmail,
		setPassword,
		setEmailError,
		setPasswordError,
		setFocusedInput,
		handleFocus,
	} = useFormState();

	const [rememberMe, setRememberMe] = useState<boolean>(false);

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = (id: string) => {
		if (id === "password") {
			setShowPassword((prev) => !prev);
		}
	};

	const submitRef = useRef(false);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value, checked } = target;

		switch (id) {
			case "password":
				setPassword(value);
				if (passwordError && value.trim() !== "") setPasswordError("");
				break;
			case "email":
				setEmail(value);
				if (emailError && value.trim() !== "") setEmailError("");
				break;
			case "rememberMe":
				setRememberMe(checked);
				break;
			default:
				console.warn(`Unhandled field: ${id}`);
		}
	};

	const handleBlur = (id: string, value: string) => {
		setFocusedInput(null);

		if (!submitRef.current) return;
		if (id === "email") {
			const error = validateEmail(email);
			setEmailError(error);
		} else if (id === "password") {
			const error = validatePassword(password);
			setPasswordError(error);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		submitRef.current = true;

		let emailErr = "";
		let passwordErr = "";

		emailErr = validateEmail(email);
		passwordErr = validatePassword(password);

		setEmailError(emailErr);
		setPasswordError(passwordErr);

		if (emailErr || passwordErr) {
			return;
		}

		console.log("Form Submitted");
	};

	const { imageIndex, handleCarousel } = useCarousel(images);

	return (
		<main className="w-full m-[104px] max-w-[77rem] mx-auto flex gap-[104px] lg:flex-col lg:px-4">
			<section className="w-full ">
				<figure className="mb-16">
					<img src={GolobeLogo} alt="Golobe Logo" />
				</figure>
				<header>
					<h1 className="font-primary font-bold text-[40px] mb-4">Login</h1>
					<p className="mb-12 opacity-75">Login to access your Golobe account </p>
				</header>

				<form onSubmit={handleSubmit}>
					{/* Email */}
					<div className="flex flex-col gap-6">
						<div className="relative w-full">
							{(focusedInput === "email" || email) && (
								<motion.label
									key="email"
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
								autoComplete="email"
								id="email"
								value={email}
								type="email"
								placeholder={`${focusedInput === "email" ? "" : "Enter your email"}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
								className="border border-[#79747e]"
							/>
							{emailError && <p className="text-red-600 text-[14px] mt-2">{emailError}</p>}
						</div>

						{/* Password */}
						<div className="relative w-full">
							{(focusedInput === "password" || password) && (
								<motion.label
									key="password"
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
									placeholder={`${focusedInput === "password" ? "" : "Enter your password"}`}
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={(e) => handleBlur(e.target.id, e.target.value)}
									onChange={handleChange}
									className="border border-[#79747e]"
								/>
								<button
									type="button"
									className="absolute right-[16px] top-[50%] -translate-y-1/2"
									onClick={() => {
										togglePasswordVisibility("password");
									}}
								>
									{showPassword ? <EyeSlash /> : <Eye />}
								</button>
							</div>
							{passwordError && <p className="text-red-600 text-[14px] mt-2">{passwordError}</p>}
						</div>
					</div>

					{/* Remember me*/}
					<div className="my-4 flex justify-between">
						<label htmlFor="rememberMe" className="text-[0.875rem] font-medium flex items-center">
							<input
								id="rememberMe"
								type="checkbox"
								checked={rememberMe}
								onChange={handleChange}
								className="mr-2"
							/>
							Remember me
						</label>
						<Link to="/forgetpassword" className="text-slamon font-medium text-[0.875rem]">
							Forgot Password
						</Link>
					</div>

					<button
						type="submit"
						className="bg-mintGreen text-blackishGreen mt-8 text-[0.875rem] font-medium p-2 rounded w-full py-4"
					>
						Submit
					</button>
				</form>

				<footer className="mt-4 flex flex-col items-center text-[0.875rem] gap-10">
					<p>
						Don’t have an account?{" "}
						<Link to="/signup" className="text-slamon font-semibold">
							Sign up
						</Link>
					</p>
					<div className="flex items-center gap-2 w-full">
						<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
						<p className="text-nowrap leading-[1] text-[0.875rem] text-blackishGreen opacity-50">
							Or login with
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
			<section className="lg:hidden">
				<figure className="w-[618px] h-[816px] rounded-[30px] overflow-hidden relative">
					<AnimatePresence>
						<motion.img
							key={images[imageIndex]}
							src={images[imageIndex]}
							initial={{ opacity: 0, x: 617 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -617 }}
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
		</main>
	);
}
