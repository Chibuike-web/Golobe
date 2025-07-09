import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormState } from "../Hooks";
import GolobeLogo from "../assets/authentication/LogoWhiteBackground.svg";
import { FacebookIcon, GoogleIcon, AppleIcon, LeftArrowIcon } from "../Icons";
import { motion } from "motion/react";
import image from "../assets/authentication/SwimmingPool.webp";

export default function ForgetPassword() {
	const { email, setEmail, emailError, setEmailError } = useFormState();

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = target;

		switch (id) {
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

	return (
		<main className="w-full m-[104px] max-w-[77rem] mx-auto flex gap-[104px] lg:flex-col lg:px-4">
			<section className="w-full ">
				<figure className="mb-16">
					<img src={GolobeLogo} alt="Golobe Logo" />
				</figure>
				<header>
					<div className="flex gap-[4px] items-center mb-4">
						<LeftArrowIcon />
						<Link to="/login" className="text-blackishGreen text-[0.875rem] font-medium">
							Back to login{" "}
						</Link>
					</div>
					<h1 className="font-primary font-bold text-[40px] mb-4">Forgot your password</h1>
					<p className="mb-12 opacity-75">
						Don’t worry, happens to all of us. Enter your email below to recover your password
					</p>
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
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-mintGreen text-blackishGreen mt-8 text-[0.875rem] font-medium p-2 rounded w-full py-4"
					>
						Submit
					</button>
				</form>

				<footer className="mt-12 flex flex-col items-center text-[0.875rem] gap-10">
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
				<figure className="w-[618px] h-[816px] rounded-[30px]">
					<img src={image} alt="" className="w-full h-full object-cover" />
				</figure>
			</section>
		</main>
	);
}
