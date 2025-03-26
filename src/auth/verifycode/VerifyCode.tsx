import { useState } from "react";
import { Link } from "react-router-dom";
import GolobeLogo from "../../assets/Authentication/LogoWhiteBackground.svg";
import { LeftArrowIcon, Eye, EyeSlash } from "../../assets/Icons";
import styles from "./VerifyCode.module.css";

export default function VerifyPassword() {
	const [focusedInput, setFocusedInput] = useState<string | null>(null);
	const [code, setCode] = useState<string>("");
	const [codeError, setCodeError] = useState<string>("");
	const [showCode, setShowCode] = useState(false);

	const toggleCodeVisibility = (id: string) => {
		if (id === "code") {
			setShowCode((prev) => !prev);
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
		const { id, value } = target;
		if (id === "code") {
			if (!Number.isNaN(Number(value)) && value.length <= 6) {
				setCode(value);
				if (value.trim()) setCodeError("");
			}
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!code) setCodeError("Enter the verification code");
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
					{/* Verification Code */}

					<div className="relative w-full">
						{(focusedInput === "code" || code) && (
							<label
								htmlFor="code"
								className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
							>
								Enter Code
							</label>
						)}
						<div className="relative">
							<input
								id="code"
								value={code}
								type={showCode ? "text" : "password"}
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
				</form>
			</section>
			<section className="lg:hidden">
				<figure className={`w-[618px] h-[816px] rounded-[30px] ${styles.image}`}></figure>
			</section>
		</main>
	);
}
