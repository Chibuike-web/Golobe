import { create } from "zustand";

type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
	isVerified: boolean;
};

type UserStoreType = {
	user: User | null;
	setUser: (newUser: User) => void;
};

const useUserStore = create<UserStoreType>((set) => ({
	user: null,
	setUser: (newUser: User) => set({ user: newUser }),
}));

export const useUser = () => {
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);

	return { user, setUser };
};

type isSignedInType = {
	isSignedIn: boolean;
	setIsSignedIn: () => void;
};

const useSignedInStore = create<isSignedInType>((set) => ({
	isSignedIn: false,
	setIsSignedIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
}));

export const useSignedIn = () => {
	const isSignedIn = useSignedInStore((state) => state.isSignedIn);
	const setIsSignedIn = useSignedInStore((state) => state.setIsSignedIn);

	return {
		isSignedIn,
		setIsSignedIn,
	};
};
