import { Link } from "react-router-dom";
import GolobeLogo from "../../assets/Authentication/LogoWhiteBackground.svg";
import styles from "./Login.module.css";
import { FacebookIcon, GoogleIcon, AppleIcon } from "../../assets/icons";
import { useFormState } from "../Hooks";

export default function Login() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		termsAccepted,
		setTermsAccepted,
		emailError,
		setEmailError,
		passwordError,
		setPasswordError,
	} = useFormState();

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
					<p className="mb-12">Login to access your Golobe account </p>
				</header>

				<form onSubmit={handleSubmit}>
					{/* Email */}
					<div className="flex flex-col gap-6">
						<div className="relative w-full">
							<label
								htmlFor="email"
								className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Email
							</label>
							<input
								id="email"
								value={email}
								type="email"
								placeholder="Enter your email"
								onChange={handleChange}
							/>
							{emailError && <p className="text-red-600 text-[14px] mt-2">{emailError}</p>}
						</div>

						{/* Password */}
						<div className="relative w-full">
							<label
								htmlFor="password"
								className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Password
							</label>
							<input
								id="password"
								value={password}
								type="password"
								placeholder="Enter your password"
								onChange={handleChange}
							/>
							{passwordError && <p className="text-red-600 text-[14px] mt-2">{passwordError}</p>}
						</div>
					</div>

					{/* Accept Terms and Conditions */}
					<div className="my-4">
						<div className="flex items-center">
							<input
								id="rem"
								type="checkbox"
								checked={termsAccepted}
								onChange={handleChange}
								className="mr-2"
							/>
							<label htmlFor="remember me" className="text-[0.875rem] font-medium">
								Remember me
							</label>
						</div>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-mintGreen text-blackishGreen text-[0.875rem] font-medium p-2 rounded w-full py-4"
					>
						Create Account
					</button>
				</form>

				{/* Already have an account */}
				<footer className="mt-4 flex flex-col items-center gap-10">
					<p>
						Don’t have an account?{" "}
						<Link to="/signup" className="text-slamon font-semibold">
							Sign up
						</Link>
					</p>
					<p>
						<span></span>Or login with<span></span>
					</p>
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
