import Olga from "../../assets/Olga.png";
import Thomas from "../../assets/Thomas.png";
import Eliot from "../../assets/Eliot.png";

import { GoogleIcon, StarIcon } from "../../assets/icons";

// Define a type for travel options
type Reviews = {
	tagline: string;
	message: string;
	extra: string;
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
		extra: "View more",
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
		extra: "View more",
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
		extra: "View more",
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
		<section className="flex">
			{reviews.map((review, index) => (
				<div>
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
				</div>
			))}
		</section>
	);
}

type ReviewsProps = {
	tagline: string;
	message: string;
	extra: string;
	rating: JSX.Element;
	sender: string;
	business: string;
	reviewSourceIcon: JSX.Element;
	reviewSources: string;
	image: string;
};

const ReviewCard: React.FC<ReviewsProps> = ({
	tagline,
	message,
	extra,
	rating,
	sender,
	business,
	reviewSourceIcon,
	reviewSources,
	image,
}) => {
	return (
		<div>
			<h2>{tagline}</h2>
			<p>{message}</p>
			<p>{extra}</p>
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
				<img src={image} alt={sender} />
			</div>
		</div>
	);
};
