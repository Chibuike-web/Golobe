import { create } from "zustand";
import type { Flight } from "../flight-flow/flight-lists/types";

interface FlightFavoritesState {
	favorites: Flight[];
	toggleFavorite: (flight: Flight) => void;
	isFavorite: (id: string) => boolean;
}

const useFlightFavoritesStore = create<FlightFavoritesState>((set, get) => ({
	favorites: [],
	toggleFavorite: (flight) => {
		const exists = get().isFavorite(flight.id);
		if (exists) {
			set({ favorites: get().favorites.filter((f) => f.id !== flight.id) });
		} else {
			set({ favorites: [...get().favorites, flight] });
		}
	},
	isFavorite: (id) => get().favorites.some((f) => f.id === id),
}));

export const useFlightFavorites = () => {
	const favorites = useFlightFavoritesStore((state) => state.favorites);
	const toggleFavorite = useFlightFavoritesStore((state) => state.toggleFavorite);
	const isFavorite = useFlightFavoritesStore((state) => state.isFavorite);

	return {
		favorites,
		toggleFavorite,
		isFavorite,
	};
};
