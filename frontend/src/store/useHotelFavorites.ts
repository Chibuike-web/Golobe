import { create } from "zustand";
import type { HotelListCardProps } from "../HotelFlow/HotelLists/types";

interface HotelFavoritesState {
	favorites: HotelListCardProps[];
	toggleFavorite: (hotel: HotelListCardProps) => void;
	isFavorite: (id: string) => boolean;
}

const useHotelFavoritesStore = create<HotelFavoritesState>((set, get) => ({
	favorites: [],
	toggleFavorite: (hotel) => {
		const exists = get().isFavorite(hotel.id);
		if (exists) {
			set({ favorites: get().favorites.filter((h) => h.id !== hotel.id) });
		} else {
			set({ favorites: [...get().favorites, hotel] });
		}
	},
	isFavorite: (id) => get().favorites.some((fav) => fav.id === id),
}));

export const useHotelFavorites = () => {
	const favorites = useHotelFavoritesStore((state) => state.favorites);
	const toggleFavorite = useHotelFavoritesStore((state) => state.toggleFavorite);
	const isFavorite = useHotelFavoritesStore((state) => state.isFavorite);

	return {
		favorites,
		toggleFavorite,
		isFavorite,
	};
};
