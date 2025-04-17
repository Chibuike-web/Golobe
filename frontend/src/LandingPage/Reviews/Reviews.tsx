import Olga from "../../assets/LandingPage/Olga.png";
import Thomas from "../../assets/LandingPage/Thomas.png";
import Eliot from "../../assets/LandingPage/Eliot.png";
import { GoogleIcon, StarIcon } from "../../assets/Icons";
import styles from "./Reviews.module.css";
import { useState } from "react";
import { motion } from "motion/react";

// Define a type for Reviews
type Reviews = {
	tagline: string;
	message: string;
	extra: string[];
	rating: number;
	sender: string;
	business: string;
	reviewSourceIcon: JSX.Element;
	reviewSources: string;
	image: string;
};

const reviews: Reviews[] = [
	{
		tagline: '"A real sense of community, nurtured"',
		message:
			'"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."',
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Olga",
		business: "Weave Studios - Kai Tak",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Olga,
	},
	{
		tagline: '"The facilities are superb. Clean, slick, bright."',
		message:
			'"A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle"',
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Thomas",
		business: "Weave Studios - Olympic",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Thomas,
	},
	{
		tagline: `"A real sense of community, nurtured"`,
		message:
			"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Eliot",
		business: "Weave Studios - Kai Tak",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Eliot,
	},
];

export default function Reviews() {
	return (
		<section className="flex flex-col mt-20 w-full max-w-[77rem] mx-auto px-4">
			<header className="w-full flex items-center justify-between md:flex-col md:items-start md:gap-4">
				<aside>
					<h2 className="text-[2rem] font-bold">Reviews</h2>
					<p className="text-black">What people says about Golobe facilities</p>
				</aside>
				<button className="text-[0.875rem] px-4 py-3 rounded-[0.25rem] text-blackishGreen border-mintGreen border-[0.0625rem]">
					See All
				</button>
			</header>
			<div
				className={`flex items-start gap-[4.625rem] mt-[2.5rem] overflow-x-scroll overflow-y-hidden min-h-[46.875rem] ${styles["scroll-container"]}`}
			>
				{reviews.map((review, index) => (
					<ReviewCard
						key={index}
						tagline={review.tagline}
						message={review.message}
						extra={review.extra}
						rating={review.rating}
						sender={review.sender}
						business={review.business}
						reviewSourceIcon={review.reviewSourceIcon}
						reviewSources={review.reviewSources}
						image={review.image}
					/>
				))}
			</div>
		</section>
	);
}

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
}: Reviews) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<aside className={styles["review-card"]}>
			<h2 className="font-primary text-blackishGreen text-2xl font-bold mb-4 md:text-xl">
				{tagline}
			</h2>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
				className="opacity-50 mb-3"
			>
				{/* 2) p tag simply clamps or not */}
				<motion.p layout className={!isExpanded ? styles["clamp-text"] : ""}>
					{message}
				</motion.p>
			</motion.div>
			<button
				className="self-end cursor-pointer"
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}
			>
				{!isExpanded ? extra[0] : extra[1]}
			</button>
			<div className="mt-4">
				<figure className="flex gap-3">
					{[...Array(rating)].map((index) => (
						<span key={index}>
							<StarIcon />
						</span>
					))}
				</figure>
				<p className="font-primary text-[0.875rem] font-bold mt-5 text-blackishGreen">{sender}</p>
				<span className="text-[0.75rem] text-blackishGreen opacity-50">{business}</span>
				<figure className="flex mt-[0.75rem] mb-10 items-center text-[0.75rem] font-primary font-bold text-blackishGreen ">
					{reviewSourceIcon}
					<p className="opacity-50">{reviewSources}</p>
				</figure>
				<img src={image} alt={sender} className="w-full" />
			</div>
		</aside>
	);
};
