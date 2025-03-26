import Olga from "../../assets/LandingPage/Olga.png";
import Thomas from "../../assets/LandingPage/Thomas.png";
import Eliot from "../../assets/LandingPage/Eliot.png";
import { GoogleIcon, StarIcon } from "../../assets/Icons";
import styles from "./Reviews.module.css";
import { useState } from "react";

// Define a type for Reviews
type Reviews = {
	tagline: string;
	message: string;
	extra: string[];
	rating: JSX.Element;
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
		rating: <StarIcon />,
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
		rating: <StarIcon />,
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
		rating: <StarIcon />,
		sender: "Eliot",
		business: "Weave Studios - Kai Tak",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Eliot,
	},
];

export default function Reviews() {
	return (
		<section className="flex flex-col mt-20 w-full max-w-[1232px] mx-auto px-4">
			<header className="w-full flex items-center justify-between md:flex-col md:items-start md:gap-4">
				<aside>
					<h2 className="text-[2rem] font-bold">Reviews</h2>
					<p className="text-black">What people says about Golobe facilities</p>
				</aside>
				<button className="text-[14px] px-4 py-3 rounded-[4px] text-blackishGreen border-mintGreen border-[1px]">
					See All
				</button>
			</header>
			<div
				className={`flex items-start gap-[74px] mt-[2.5rem] overflow-x-scroll overflow-y-hidden min-h-[750px] ${styles["scroll-container"]}`}
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
			<h2 className="font-primary text-blackishGreen text-2xl font-bold mb-4">{tagline}</h2>
			<p
				className={`text-blackishGreen opacity-50 mb-3 ${!isExpanded ? styles["clamp-text"] : ""}`}
			>
				{message}
			</p>
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
					{[...Array(5)].map((index) => (
						<span key={index}>{rating}</span>
					))}
				</figure>
				<p className="font-primary text-[14px] font-bold mt-5 text-blackishGreen">{sender}</p>
				<span className="text-[12px] text-blackishGreen opacity-50">{business}</span>
				<figure className="flex mt-[12px] mb-10 items-center text-[12px] font-primary text-blackishGreen ">
					{reviewSourceIcon}
					<p className="opacity-50">{reviewSources}</p>
				</figure>
				<img src={image} alt={sender} className="w-full" />
			</div>
		</aside>
	);
};
