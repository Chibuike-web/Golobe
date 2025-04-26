import { useState } from "react";
import NavbarSignedIn from "./NavbarSignedIn";
import NavbarGuest from "./NavbarGuest";

export default function Navbar() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	return <div>{isSignedIn ? <NavbarSignedIn /> : <NavbarGuest />}</div>;
}
