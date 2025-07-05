import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StarIcon } from "../../Icons";
import styles from "./Reviews.module.css";
import { ReviewsType } from "../types";
import { reviews } from "../utils";

export default function Reviews() {
	return (
		<section className="flex flex-col mt-20 w-full max-w-[77rem] mx-auto px-4">
			<header className="w-full flex items-center justify-between md:flex-col md:items-start md:gap-4">
				<aside>
					<h2 className="text-[2rem] font-bold">Reviews</h2>
					<p className="text-black">What people say about Golobe facilities</p>
				</aside>
				<button className="text-sm px-4 py-3 rounded border border-mintGreen text-blackishGreen">
					See All
				</button>
			</header>

			<div
				className={`flex items-start gap-[4.625rem] mt-10 overflow-x-scroll overflow-y-hidden min-h-[46.875rem] ${styles["scroll-container"]}`}
			>
				{reviews.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</div>
		</section>
	);
}

const anim = {
	initial: { opacity: 0, height: 20 },
	open: {
		opacity: 1,
		height: "auto",
		transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
	},
	closed: {
		opacity: 1,
		height: 20,
		transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
	},
};

const ReviewCard = ({
	tagline,
	message,
	extra,
	rating,
	sender,
	business,
	reviewSourceIcon,
	reviewSources,
	image,
}: ReviewsType) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<aside className={styles["review-card"]}>
			<h2 className="font-primary text-blackishGreen text-2xl font-bold mb-4 md:text-xl">
				{tagline}
			</h2>

			<AnimatePresence initial={false}>
				<motion.div
					variants={anim}
					initial="initial"
					animate={isExpanded ? "open" : "closed"}
					exit="closed"
					className={`text-blackishGreen/50 mb-4 ${!isExpanded ? "overflow-hidden" : ""}`}
				>
					{message}
				</motion.div>
			</AnimatePresence>

			<button
				className="self-end cursor-pointer text-mintGreen text-sm"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? extra[1] : extra[0]}
			</button>

			<div className="mt-4">
				<figure className="flex gap-3">
					{[...Array(rating)].map((_, idx) => (
						<span key={idx}>
							<StarIcon />
						</span>
					))}
				</figure>

				<p className="font-primary text-sm font-bold mt-5 text-blackishGreen">{sender}</p>
				<span className="text-xs text-blackishGreen opacity-50">{business}</span>

				<figure className="flex mt-3 mb-10 items-center text-xs font-primary font-bold text-blackishGreen">
					{reviewSourceIcon}
					<p className="opacity-50 ml-1">{reviewSources}</p>
				</figure>

				<img src={image} alt={sender} className="w-full" />
			</div>
		</aside>
	);
};
