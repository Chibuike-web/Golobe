import NavbarSignedIn from "./NavbarSignedIn";
import NavbarGuest from "./NavbarGuest";
import { useSignedIn } from "../store/useUserStore";

export default function Navbar() {
	const { isSignedIn } = useSignedIn();
	return <>{isSignedIn ? <NavbarSignedIn /> : <NavbarGuest />}</>;
}
