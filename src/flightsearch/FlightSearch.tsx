import Herosection from "./Herosection/Herosection";

export default function FlightSearch() {
	return (
		<div className="flex flex-col">
			<Herosection />
			<section>
				<div className="mx-auto max-w-[90rem] px-[104px] w-full mt-20 mb-6 flex justify-between items-center">
					<div>
						<h2 className="text-[32px] mb-4">Let's go places together</h2>
						<p>Discover the latest offers and news and start planning your next trip with us.</p>
					</div>
					<button
						className="text-[14px] px-4 py-3 rounded-[4px] text-blackishGreen border-mintGreen border-[1px]"
						aria-label="See all offers"
					>
						See all
					</button>
				</div>
				<figure className="bg-mintGreen block w-full min-h-[486px]" aria-labelledby="hero-section">
					<div className="mx-auto max-w-[90rem] px-[104px]">
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
						<div></div>
					</div>
				</figure>
			</section>
		</div>
	);
}
