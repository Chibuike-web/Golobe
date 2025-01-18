import { useState } from "react";

export const useFormState = () => {
	type ErrorField = string;
	// Form state
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

	// Error state
	const [firstNameError, setFirstNameError] = useState<ErrorField>("");
	const [lastNameError, setLastNameError] = useState<ErrorField>("");
	const [emailError, setEmailError] = useState<ErrorField>("");
	const [passwordError, setPasswordError] = useState<ErrorField>("");
	const [confirmPasswordError, setConfirmPasswordError] = useState<ErrorField>("");
	const [phoneNumberError, setPhoneNumberError] = useState<ErrorField>("");
	const [termsAcceptedError, setTermsAcceptedError] = useState<ErrorField>("");

	return {
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
	};
};
