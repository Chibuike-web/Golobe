import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import GolobeLogo from "../assets/authentication/LogoWhiteBackground.svg";
import { LeftArrowIcon, Eye, EyeSlash } from "../Icons";
import image from "../assets/authentication/SwimmingPool.webp";
import { useFormState, useUserMiddleware } from "../Hooks";
import { motion } from "motion/react";

export default function VerifyPassword() {
	const { focusedInput, handleBlur, handleFocus } = useFormState();
	const [code, setCode] = useState<string>("");
	const [codeError, setCodeError] = useState<string>("");
	const [showCode, setShowCode] = useState(false);
	const [success, setSuccess] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	if (!id) return;

	useUserMiddleware(id);

	const toggleCodeVisibility = (id: string) => {
		if (id === "code") {
			setShowCode((prev) => !prev);
		}
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = target;
		if (id === "code") {
			if (!Number.isNaN(Number(value)) && value.length <= 6) {
				setCode(value);
				if (value.trim()) setCodeError("");
			}
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!code) setCodeError("Enter the verification code");

		try {
			const res = await fetch("http://localhost:5000/api/auth/verify", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id: id, code: code }),
			});

			if (!res.ok) {
				const errorData = await res.json();
				console.log(errorData.message);
				setCodeError(errorData.message);
				return;
			}
			const data = await res.json();
			console.log(data.message);
			setSuccess(data.message);
			setTimeout(() => navigate("/login"), 1000);
		} catch (err) {
			console.log("Issue verifying OTP", err);
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
					<h1 className="font-primary font-bold text-[40px] mb-4">Verify code</h1>
					<p className="mb-12 opacity-75">An authentication code has been sent to your email. </p>
				</header>
				<form onSubmit={handleSubmit}>
					<div className="relative w-full">
						{(focusedInput === "code" || code) && (
							<motion.label
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: "-50%" }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								htmlFor="code"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Enter Code
							</motion.label>
						)}
						<div className="relative">
							<input
								id="code"
								value={code}
								type={showCode ? "text" : "password"}
								className="border border-[#79747e]"
								placeholder={`${
									focusedInput === "code" || code ? "" : "Enter your verification code"
								}`}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={handleChange}
							/>
							<button
								type="button"
								className="absolute right-[16px] top-[50%] -translate-y-1/2"
								onClick={() => {
									toggleCodeVisibility("code");
								}}
							>
								{showCode ? <EyeSlash /> : <Eye />}
							</button>
						</div>
						{codeError && <p className="text-red-600 text-[14px] mt-2">{codeError}</p>}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-mintGreen text-blackishGreen mt-8 text-[0.875rem] font-medium p-2 rounded w-full py-4"
					>
						Verify
					</button>
					{codeError && (
						<p className="mt-4 rounded-md bg-red-100 text-center text-red-700 px-4 py-3 border border-red-300">
							{codeError}
						</p>
					)}
					{success && (
						<p className="mt-4 rounded-md bg-green-100 text-center text-green-700 px-4 py-3 border border-green-300">
							{success}
						</p>
					)}
				</form>
			</section>
			<section className="lg:hidden">
				<figure className="w-[618px] h-[816px] rounded-[30px] overflow-hidden">
					<img src={image} alt="" className="w-full h-full object-cover" />
				</figure>
			</section>
		</main>
	);
}
