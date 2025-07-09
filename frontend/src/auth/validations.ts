export function validateFirstName(firstName: string) {
	if (!firstName) return "First name is required";
	return "";
}

export function validateLastName(lastName: string) {
	if (!lastName) return "First name is required";
	return "";
}

export function validateEmail(email: string) {
	if (!email) return "Email is required";
	if (email.includes(" ")) return "Email cannot contain spaces";
	if (!email.includes("@")) return "Invalid email";
	return "";
}

export function validatePhoneNumber(phoneNumber: string) {
	if (!phoneNumber) {
		return "Phone number is required";
	} else if (!/^\d{10,11}$/.test(phoneNumber)) {
		return "Enter a valid 10 or 11 digit phone number";
	}
	return "";
}

export function validateTermsAccepted(termsAccepted: boolean) {
	if (!termsAccepted) {
		return "You must accept the terms and conditions";
	}
	return "";
}

export function validatePassword(password: string) {
	if (!password) return "Password is required";
	if (password.length < 6) return "Password should be minimum 6 characters";
	return "";
}

export function validateConfirmPassword(confirmPassword: string, password: string) {
	if (!confirmPassword) {
		return "Please confirm your password";
	} else if (password !== confirmPassword) {
		return "Passwords do not match";
	}
	return "";
}
