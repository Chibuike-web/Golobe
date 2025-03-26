import { Link } from "react-router-dom";
import GolobeLogo from "../../assets/Authentication/LogoWhiteBackground.svg";
import styles from "./Login.module.css";
import { FacebookIcon, GoogleIcon, AppleIcon, Eye, EyeSlash } from "../../assets/Icons";
import { useFormState } from "../../Hooks";
import { useState } from "react";

export default function Login() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		emailError,
		setEmailError,
		passwordError,
		setPasswordError,
	} = useFormState();

	const [rememberMe, setRememberMe] = useState<boolean>(false);

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = (id: string) => {
		if (id === "password") {
			setShowPassword((prev) => !prev);
		}
	};

	const [focusedInput, setFocusedInput] = useState<string | null | boolean>(null);

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
			case "password":
				setPassword(value);
				if (value.length > 0) setPasswordError("");
				break;
			case "email":
				setEmail(value);
				if (value.trim() && value.includes("@")) setEmailError("");
				break;
			case "rememberMe":
				setRememberMe(checked);
				break;
			default:
				console.warn(`Unhandled field: ${id}`);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic Validation
		if (!email) setEmailError("Email is required");
		if (!password) setPasswordError("Password is required");

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
	};

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

						{/* Password */}
						<div className="relative w-full">
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
						<div className="flex items-center">
							<input
								id="rememberMe"
								type="checkbox"
								checked={rememberMe}
								onChange={handleChange}
								className="mr-2"
							/>
							<label htmlFor="remember me" className="text-[0.875rem] font-medium">
								Remember me
							</label>
						</div>
						<Link to="/forgetpassword" className="text-slamon font-medium text-[0.875rem]">
							Forgot Password
						</Link>
					</div>

					{/* Submit Button */}
					<Link to="/verifycode">
						<button
							type="submit"
							className="bg-mintGreen text-blackishGreen mt-8 text-[0.875rem] font-medium p-2 rounded w-full py-4"
						>
							Submit
						</button>
					</Link>
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
				<figure className={`w-[618px] h-[816px] rounded-[30px] ${styles.image}`}></figure>
			</section>
		</main>
	);
}
