import { motion } from "motion/react";
import { details } from "./utils";

export default function Bookings() {
	return (
		<section className="mx-auto max-w-[77rem] mt-20 flex flex-col w-full">
			<div className="w-full mb-6 flex justify-between items-center xl:px-4 md:flex-col md:items-start">
				<div>
					<h2 className="text-[32px] mb-4">Fall into travel</h2>
					<p className="w-full max-w-[851px] md:pb-4">
						Going somewhere to celebrate this season? Whether you’re going home or somewhere to
						roam, we’ve got the travel tools to get you to your destination.
					</p>
				</div>
				<button
					className="text-[14px] px-4 py-3 rounded-[4px] text-blackishGreen border-mintGreen border-[1px]"
					aria-label="See all offers"
				>
					See all
				</button>
			</div>
			<section className=" mx-auto max-w-[77rem] w-full xl:px-4">
				<div className="grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-4 w-full">
					{details.map(({ id, city, subCopy, price, image }, index) => (
						<BookingCard
							id={id}
							key={id}
							city={city}
							subCopy={subCopy}
							price={price}
							image={image}
							index={index}
						/>
					))}
				</div>
			</section>
		</section>
	);
}

type BookingCardProps = {
	id: string;
	city: string;
	subCopy: string;
	price: number;
	image: string;
	index: number;
};

const fadeUp = {
	initial: { opacity: 0, y: 100 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

function BookingCard({ city, subCopy, price, image, index }: BookingCardProps) {
	return (
		<motion.article
			key={index}
			custom={index}
			variants={fadeUp}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
		>
			<div className="grid grid-rows-1 grid-cols-1">
				<figure className="row-start-1 col-start-1">
					<img src={image} alt={`Image of ${image} `} className="rounded-[12px] w-full" />
				</figure>
				{/* Upper Content */}
				<div className="row-start-1 col-start-1 flex flex-col justify-end p-6">
					<div className="flex items-center justify-between">
						<header className="text-white">
							<h4 className="font-semibold text-2xl">{city}</h4>
							<p className="text-[14px]">{subCopy}</p>
						</header>
						<p className="text-white font-semibold text-2xl">${price}</p>
					</div>
					<button className="w-full bg-mintGreen py-[15px] mt-4 rounded-[4px]">Book Flight</button>
				</div>
			</div>
		</motion.article>
	);
}
