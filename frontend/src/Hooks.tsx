import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

	const [focusedInput, setFocusedInput] = useState<string | null | boolean>(null);

	const handleFocus = (id: string) => {
		setFocusedInput(id);
	};

	const handleBlur = (id: string, value: string) => {
		setFocusedInput(null);
	};

	const handlePhoneNumber = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = target;

		switch (id) {
			case "phoneNumber":
				if (!Number.isNaN(Number(value)) && value.length <= 11) {
					setPhoneNumber(value);
					if (value.trim()) setPhoneNumberError("");
				}
				break;
			default:
				console.warn(`Unhandled field: ${id}`);
		}
	};

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
		handleBlur,
		handleFocus,
		focusedInput,
		setFocusedInput,
		handlePhoneNumber,
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
	const [passenger, setPassenger] = useState<string>("");
	const [travelClass, setTravelClass] = useState<string>("");

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
		passenger,
		setPassenger,
		travelClass,
		setTravelClass,
	};
};

export const usePaymentDetails = () => {
	// Card Information
	const [cardNumber, setCardNumber] = useState<string>("");
	const [expiryDate, setExpiryDate] = useState<string>("");
	const [cvv, setCvv] = useState<string>("");

	// Cardholder Details
	const [nameOnCard, setNameOnCard] = useState<string>("");
	const [country, setCountry] = useState<string>("");

	const [focusedInput, setFocusedInput] = useState<string>("");

	const handleFocus = (id: string) => setFocusedInput(id);
	const handleBlur = (id: string, value: string) => {
		if (!value.trim() && focusedInput === id) {
			setFocusedInput("");
		}
	};

	return {
		cardNumber,
		setCardNumber,
		expiryDate,
		setExpiryDate,
		cvv,
		setCvv,
		nameOnCard,
		setNameOnCard,
		country,
		setCountry,
		focusedInput,
		handleFocus,
		handleBlur,
	};
};

export const useHotelSearchFormState = () => {
	// Destination
	const [destination, setDestination] = useState<string>("");

	// Check-In
	const [checkIn, setCheckIn] = useState<string>("");

	// Check-Out
	const [checkOut, setCheckOut] = useState<string>("");

	// Rooms and Guests
	const [room, setRoom] = useState<string>("");
	const [guest, setGuest] = useState<string>("");

	return {
		destination,
		setDestination,
		checkIn,
		setCheckIn,
		checkOut,
		setCheckOut,
		room,
		setRoom,
		guest,
		setGuest,
	};
};

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query, matches]);

	return matches;
};

export const useWindowWidth = () => {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export const useScroll = () => {
	const [scrollHeight, setScrollHeight] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrollHeight(true);
			} else {
				setScrollHeight(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollHeight;
};

export const useIsShow = () => {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isShow]);

	return { isShow, setIsShow };
};

export function useCarousel(images: string[]) {
	const intervalRef = useRef<number | null>(null);
	const [imageIndex, setImageIndex] = useState(0);
	const handleCarousel = (index: number) => {
		setImageIndex(index);
	};

	useEffect(() => {
		intervalRef.current = window.setInterval(() => {
			setImageIndex((prev) => (prev + 1) % images.length);
		}, 3000);

		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return {
		imageIndex,
		handleCarousel,
	};
}

export const useUserMiddleware = (id: string) => {
	const navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();

		async function checkUser() {
			try {
				const res = await fetch(`http://localhost:5000/auth/users/${id}`);
				if (!res.ok) {
					navigate("/signup");
					return;
				}
			} catch (error) {
				console.log("User check failed", error);
				navigate("/signup");
			}
		}
		checkUser();

		return () => controller.abort();
	}, [id, navigate]);
};
