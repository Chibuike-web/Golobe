import { motion } from "motion/react";
import { details } from "./utils";
import { BookingCardProps } from "./types";

export default function Bookings() {
	return (
		<section className="mx-auto max-w-[77rem] mt-20 flex flex-col w-full px-4">
			<header className="w-full mb-6 flex justify-between items-center md:flex-col md:items-start">
				<div>
					<h2 className="text-[32px] mb-4">Fall into travel</h2>
					<p className="max-w-[851px]">
						Going somewhere to celebrate this season? Whether you’re going home or somewhere to
						roam, we’ve got the travel tools to get you to your destination.
					</p>
				</div>
				<button
					className="text-[14px] px-4 py-3 rounded-[4px] text-blackishGreen border-mintGreen border"
					aria-label="See all offers"
				>
					See all
				</button>
			</header>

			<div className="grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-4">
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
	);
}

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
			custom={index}
			variants={fadeUp}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
		>
			<div className="relative">
				<img src={image} alt={`Image of ${city}`} className="rounded-[12px] w-full" />

				<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[12px]">
					<div className="flex items-center justify-between text-white">
						<header>
							<h4 className="font-semibold text-2xl">{city}</h4>
							<p className="text-[14px]">{subCopy}</p>
						</header>
						<p className="font-semibold text-2xl">${price}</p>
					</div>
					<button className="w-full bg-mintGreen text-black py-[15px] mt-4 rounded-[4px]">
						Book Flight
					</button>
				</div>
			</div>
		</motion.article>
	);
}
