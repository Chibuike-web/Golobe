import Herosection from "./Herosection/Herosection";
import styles from "./flightsearch.module.css";
import FirstImage from "../assets/FirstImage.png";
import FirstArrow from "../assets/FirstArrow.svg";
import SecondImage from "../assets/SecondImage.png";
import SecondArrow from "../assets/SecondArrow.svg";
import ThirdImage from "../assets/ThirdImage.png";
import ThirdArrow from "../assets/ThirdArrow.svg";
import FourthImage from "../assets/FourthImage.png";
import FourthArrow from "../assets/FourthArrow.svg";
import FifthImage from "../assets/FifthImage.png";
import FifthArrow from "../assets/FifthArrow.svg";
import Footer from "./Footer/Footer";
import Bookings from "./Bookings/Bookings";

export default function FlightSearch() {
	return (
		<div className="flex flex-col">
			<Herosection />
			<section>
				<div className="mx-auto max-w-[90rem] px-[104px] w-full mt-20 mb-6 flex justify-between items-center lg:px-4 md:flex-col md:items-start">
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
				<figure
					className={`bg-mintGreen block w-full min-h-[486px] ${styles.background}`}
					aria-labelledby="hero-section"
				>
					<div className="mx-auto max-w-[90rem] px-[104px] w-full relative">
						{/* First */}
						<div className="absolute left-[200px] top-[72px]">
							<div className="flex items-center gap-2 bg-white w-fit py-[4px] pr-[8px] pl-[4px] rounded-[4px]">
								<figure>
									<img src={FirstImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[10px] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[8px]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FirstArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[46px] mt-[6px]"
							/>
						</div>
						{/* Second */}
						<div className="absolute left-[990px] top-[89px]">
							<div className="flex items-center gap-2 bg-white w-fit py-[4px] pr-[8px] pl-[4px] rounded-[4px]">
								<figure>
									<img src={SecondImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[10px] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[8px]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={SecondArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-36px] mt-[6px]"
							/>
						</div>
						{/* Third */}
						<div className="absolute left-[774px] top-[248px]">
							<img
								src={ThirdArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-10px] mt-[6px]"
							/>
							<div className="flex items-center gap-2 bg-white w-fit py-[4px] pr-[8px] pl-[4px] rounded-[4px]">
								<figure>
									<img src={ThirdImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[10px] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[8px]">Boarding Pass N’123</p>
								</div>
							</div>
						</div>
						{/* Fourth */}
						<div className="absolute left-[467px] top-[294px]">
							<div className="flex items-center gap-2 bg-white w-fit py-[4px] pr-[8px] pl-[4px] rounded-[4px]">
								<figure>
									<img src={FourthImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[10px] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[8px]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FourthArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-10px] mt-[6px]"
							/>
						</div>
						{/* Fifth */}
						<div className="absolute left-[1137px] top-[260px]">
							<div className="flex items-center gap-2 bg-white w-fit py-[4px] pr-[8px] pl-[4px] rounded-[4px]">
								<figure>
									<img src={FifthImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[10px] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[8px]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FifthArrow}
								alt="a black curved arrow pointing upwar"
								className="mt-[6px]"
							/>
						</div>
					</div>
				</figure>
			</section>
			<Bookings />
			<Footer />
		</div>
	);
}
