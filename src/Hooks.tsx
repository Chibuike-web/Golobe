import { useState } from "react";

export const useFormState = () => {
	// Form state
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

	// Error state
	const [firstNameError, setFirstNameError] = useState<string>("");
	const [lastNameError, setLastNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("");
	const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
	const [phoneNumberError, setPhoneNumberError] = useState<string>("");
	const [termsAcceptedError, setTermsAcceptedError] = useState<string>("");

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

export const useFlightSearchFormState = () => {
	// From - To
	const [from, setFrom] = useState<string>("");
	const [to, setTo] = useState<string>("");

	// Trip type: "Return" or "One-way"
	const [trip, setTrip] = useState<string>("");

	// Dates
	const [departDate, setDepartDate] = useState<string>("");
	const [returnDate, setReturnDate] = useState<string>("");

	// Passenger count and travel class
	const [passengers, setPassengers] = useState<number>(1);
	const [travelClass, setTravelClass] = useState<string>("Economy");

	return {
		from,
		setFrom,
		to,
		setTo,
		trip,
		setTrip,
		departDate,
		setDepartDate,
		returnDate,
		setReturnDate,
		passengers,
		setPassengers,
		travelClass,
		setTravelClass,
	};
};
