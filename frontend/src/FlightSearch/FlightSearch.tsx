import Herosection from "./HeroSection/HeroSection";
import styles from "./FlightSearch.module.css";
import FirstImage from "../assets/FlightSearch/FirstImage.png";
import FirstArrow from "../assets/FlightSearch/FirstArrow.svg";
import SecondImage from "../assets/FlightSearch/SecondImage.png";
import SecondArrow from "../assets/FlightSearch/SecondArrow.svg";
import ThirdImage from "../assets/FlightSearch/ThirdImage.png";
import ThirdArrow from "../assets/FlightSearch/ThirdArrow.svg";
import FourthImage from "../assets/FlightSearch/FourthImage.png";
import FourthArrow from "../assets/FlightSearch/FourthArrow.svg";
import FifthImage from "../assets/FlightSearch/FifthImage.png";
import FifthArrow from "../assets/FlightSearch/FifthArrow.svg";
import Forest from "../assets/FlightSearch/Forest.png";
import Trees from "../assets/FlightSearch/Trees.png";
import Ocean from "../assets/FlightSearch/Ocean.png";
import Beach from "../assets/FlightSearch/Beach.png";
import Footer from "../Footer/Footer";
import Bookings from "./Bookings/Bookings";

export default function FlightSearch() {
	return (
		<div className="flex flex-col">
			<Herosection />
			<section>
				<div className="mx-auto max-w-[77rem] w-full mt-[1.25rem] mb-[1.5rem] flex justify-between items-center lg:px-4 md:flex-col md:items-start">
					<div>
						<h2 className="text-[2rem] mb-[1rem]">Let's go places together</h2>
						<p>Discover the latest offers and news and start planning your next trip with us.</p>
					</div>
					<button
						className="text-[0.875rem] px-[1rem] py-[0.75rem] rounded-[0.25rem] text-blackishGreen border-mintGreen border-[1px]"
						aria-label="See all offers"
					>
						See all
					</button>
				</div>
				<figure
					className={`bg-mintGreen block w-full min-h-[30.375rem] ${styles.background}`}
					aria-labelledby="hero-section"
				>
					<div className="mx-auto max-w-[90rem] px-[6.5rem] w-full relative">
						{/* First */}
						<div className="absolute left-[12.5rem] top-[4.5rem]">
							<div className="flex items-center gap-2 bg-white w-fit py-[0.25rem] pr-[0.5rem] pl-[0.25rem] rounded-[0.25rem]">
								<figure>
									<img src={FirstImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[0.625rem] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[0.5rem]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FirstArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[2.875rem] mt-[0.375rem]"
							/>
						</div>
						{/* Second */}
						<div className="absolute left-[61.875rem] top-[5.5625rem]">
							<div className="flex items-center gap-2 bg-white w-fit py-[0.25rem] pr-[0.5rem] pl-[0.25rem] rounded-[0.25rem]">
								<figure>
									<img src={SecondImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[0.625rem] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[0.5rem]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={SecondArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-2.25rem] mt-[0.375rem]"
							/>
						</div>
						{/* Third */}
						<div className="absolute left-[48.375rem] top-[15.5rem]">
							<img
								src={ThirdArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-0.625rem] mt-[0.375rem]"
							/>
							<div className="flex items-center gap-2 bg-white w-fit py-[0.25rem] pr-[0.5rem] pl-[0.25rem] rounded-[0.25rem]">
								<figure>
									<img src={ThirdImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[0.625rem] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[0.5rem]">Boarding Pass N’123</p>
								</div>
							</div>
						</div>
						{/* Fourth */}
						<div className="absolute left-[29.1875rem] top-[18.375rem]">
							<div className="flex items-center gap-2 bg-white w-fit py-[0.25rem] pr-[0.5rem] pl-[0.25rem] rounded-[0.25rem]">
								<figure>
									<img src={FourthImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[0.625rem] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[0.5rem]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FourthArrow}
								alt="a black curved arrow pointing upwar"
								className="ml-[-0.625rem] mt-[0.375rem]"
							/>
						</div>
						{/* Fifth */}
						<div className="absolute left-[71.0625rem] top-[16.25rem]">
							<div className="flex items-center gap-2 bg-white w-fit py-[0.25rem] pr-[0.5rem] pl-[0.25rem] rounded-[0.25rem]">
								<figure>
									<img src={FifthImage} alt="an image of a building" />
								</figure>
								<div>
									<h4 className="font-primary text-[0.625rem] font-bold text-blackishGreen">
										James Doe
									</h4>
									<p className="text-[0.5rem]">Boarding Pass N’123</p>
								</div>
							</div>
							<img
								src={FifthArrow}
								alt="a black curved arrow pointing upwar"
								className="mt-[0.375rem]"
							/>
						</div>
					</div>
				</figure>
			</section>
			<Bookings />
			<section className="mx-auto max-w-[77rem] mt-20 flex flex-col w-full">
				<header className="w-full mb-6 flex justify-between items-center lg:px-4 md:flex-col md:items-start">
					<div>
						<h2 className="text-[2rem] mb-4">Fall into travel</h2>
						<p className="w-full max-w-[53.1875rem]">
							Going somewhere to celebrate this season? Whether you’re going home or somewhere to
							roam, we’ve got the travel tools to get you to your destination.
						</p>
					</div>
					<button
						className="text-[0.875rem] px-4 py-3 rounded-[0.25rem] text-blackishGreen border-mintGreen border-[1px]"
						aria-label="See all offers"
					>
						See all
					</button>
				</header>

				<div className="grid grid-cols-[1fr_19.875rem_19.875rem] grid-rows-2 gap-6 lg:grid-cols-1 lg:px-4">
					<article className="w-full row-span-2 flex flex-col p-6 bg-mintGreen rounded-[1.25rem]">
						<header className="flex justify-between items-start mb-6">
							<h2 className="font-primary font-bold text-[2.5rem] leading-[3.1875rem] max-w-[22.6875rem] w-full">
								Backpacking Sri Lanka
							</h2>
							<div className="bg-white flex flex-col p-2 items-center rounded-[0.5rem]">
								<span className="text-[0.875rem] text-blackishGreen">From</span>
								<span className="text-[1.25rem] font-semibold text-blackishGreen">$700</span>
							</div>
						</header>
						<p className="text-[0.875rem] text-blackishGreen ">
							Traveling is a unique experience as it's the best way to unplug from the pushes and
							pulls of daily life. It helps us to forget about our problems, frustrations, and fears
							at home. During our journey, we experience life in different ways. We explore new
							places, cultures, cuisines, traditions, and ways of living.
						</p>
						<button className="w-full bg-white py-[0.9375rem] rounded-[0.25rem] mt-auto lg:mt-[7.5rem]">
							Book Flight
						</button>
					</article>

					<figure className="w-full">
						<img src={Forest} alt="A serene forest view" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Ocean} alt="The beautiful ocean waves" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Trees} alt="Lush green trees" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Beach} alt="Sunny beach" className="w-full" />
					</figure>
				</div>
			</section>
			<Footer />
		</div>
	);
}
