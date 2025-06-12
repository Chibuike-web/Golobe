import { create } from "zustand";
import type { HotelListCardProps } from "../HotelFlow/HotelLists/types";
import type { Flight } from "../FlightFlow/FlightLists/types";

type FavoriteItem = HotelListCardProps | Flight;

interface FavoritesState {
	favorites: FavoriteItem[];
	toggleFavorite: (item: FavoriteItem) => void;
	isFavorites: (id: string) => boolean;
}

const useFavoritesStore = create<FavoritesState>((set, get) => ({
	favorites: [],
	toggleFavorite: (item) => {
		const exists = get().isFavorites(item.id);
		if (exists) {
			set({ favorites: get().favorites.filter((fav) => fav.id !== item.id) });
		} else {
			set({ favorites: [...get().favorites, item] });
		}
	},
	isFavorites: (id) => get().favorites.some((fav) => fav.id === id),
}));

export const useFlightFavorites = () => {
	const favorites = useFavoritesStore((state) => state.favorites);
	const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
	const isFavorites = useFavoritesStore((state) => state.isFavorites);

	return {
		favorites,
		toggleFavorite,
		isFavorites,
	};
};

export const useHotelFavorites = () => {
	const favorites = useFavoritesStore((state) => state.favorites);
	const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
	const isFavorites = useFavoritesStore((state) => state.isFavorites);

	return {
		favorites,
		toggleFavorite,
		isFavorites,
	};
};
