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
			<section className="mx-auto max-w-[77rem] mt-20 flex flex-col w-full">
				<header className="w-full mb-6 flex justify-between items-center lg:px-4 md:flex-col md:items-start">
					<div>
						<h2 className="text-[32px] mb-4">Fall into travel</h2>
						<p className="w-full max-w-[851px]">
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
				</header>

				<div className="grid grid-cols-[1fr_318px_318px] grid-rows-2 gap-6 lg:grid-cols-1 lg:px-4">
					<article className="w-full row-span-2 flex flex-col p-6 bg-mintGreen rounded-[20px]">
						<header className="flex justify-between items-start mb-6">
							<h2 className="font-primary font-bold text-[40px] leading-[51px] max-w-[363px] w-full">
								Backpacking Sri Lanka
							</h2>
							<div className="bg-white flex flex-col p-2 items-center rounded-[8px]">
								<span className="text-[14px] text-blackishGreen">From</span>
								<span className="text-[20px] font-semibold text-blackishGreen">$700</span>
							</div>
						</header>
						<p className="text-[14px] text-blackishGreen ">
							Traveling is a unique experience as it's the best way to unplug from the pushes and
							pulls of daily life. It helps us to forget about our problems, frustrations, and fears
							at home. During our journey, we experience life in different ways. We explore new
							places, cultures, cuisines, traditions, and ways of living.
						</p>
						<button className="w-full bg-white py-[15px] rounded-[4px] mt-auto lg:mt-[120px]">
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
