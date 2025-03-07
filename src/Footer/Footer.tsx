import CTAImage from "../assets/LandingPage/emojione-v1_open-mailbox-with-lowered-flag.svg";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../assets/icons";
import FooterLogo from "../assets/LandingPage/Logo.svg";

export default function FooterSection() {
	return (
		<section className="pb-[64px] flex flex-col bg-mintGreen mt-[241px] px-4">
			<CTA />
			<Footer />
		</section>
	);
}

const CTA = () => {
	return (
		<section
			aria-labelledby="cta-heading"
			className="w-full mt-[-151px] max-w-[77rem] mx-auto flex items-end justify-between bg-[#CDEAE1] px-6 rounded-[20px] lg:flex-col lg:items-start"
		>
			<div className="py-6 w-full max-w-[600px]">
				<header>
					<h2
						id="cta-heading"
						className="font-primary text-blackishGreen font-bold text-[44px] md:text-[2rem] md:leading-[40px] w-full max-w-[364px] leading-[54px] mb-[24px]"
					>
						Subscribe Newsletter
					</h2>
					<p
						className="font-primary text-xl font-bold mb-[8px]"
						style={{ color: "rgb(17, 34, 17, 0.8)" }}
					>
						The Travel
					</p>
				</header>
				<p className=" font-medium mb-4 w-full" style={{ color: "rgb(17, 34, 17, 0.7)" }}>
					Get inspired! Receive travel discounts, tips, and behind-the-scenes stories.
				</p>
				<form
					action="/submit-email"
					method="post"
					aria-label="Subscribe to newsletter"
					className="w-full flex gap-4 md:flex-col"
				>
					<input
						type="email"
						name="email"
						id="email-address"
						placeholder="Your email address"
						required
						className="px-4 py-[18px] w-full rounded-[4px]"
					/>
					<input
						type="submit"
						value="Subscribe"
						className="px-4 py-[18px] rounded-[4px] bg-blackishGreen text-white"
					/>
				</form>
			</div>
			<figure>
				<img src={CTAImage} alt="Travel inspiration" />
			</figure>
		</section>
	);
};

// Define types for the footer column component
type FooterColumnProps = {
	title: string;
	items: string[];
};

const FooterSectionColumn = ({ title, items }: FooterColumnProps) => (
	<section className="flex flex-col gap-4">
		<h2 className="text-blackishGreen font-bold font-primary">{title}</h2>
		<ul
			className="flex flex-col gap-3 text-[14px] font-medium"
			style={{ color: "rgb(17, 34, 17, 0.7)" }}
		>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</section>
);

const Footer = () => {
	return (
		<footer className="max-w-[77rem] w-full mt-[4rem] mx-auto flex gap-[140px] md:gap-[70px] md:flex-col">
			<div className="w-max">
				<img src={FooterLogo} alt="Footer logo" />
				<div className="flex justify-between mt-6" aria-label="Social media links">
					<a href="#" aria-label="Facebook">
						<FacebookIcon />
					</a>
					<a href="#" aria-label="Twitter">
						<TwitterIcon />
					</a>
					<a href="#" aria-label="YouTube">
						<YoutubeIcon />
					</a>
					<a href="#" aria-label="Instagram">
						<InstagramIcon />
					</a>
				</div>
			</div>
			<div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,_minmax(11rem,1fr))]">
				<FooterSectionColumn
					title="Our Destinations"
					items={["Canada", "Alaska", "France", "Iceland"]}
				/>
				<FooterSectionColumn
					title="Our Activities"
					items={["Northern Lights", "Cruising & Sailing", "Multi-activities", "Kayaking"]}
				/>
				<FooterSectionColumn
					title="Travel Blogs"
					items={[
						"Bali Travel Guide",
						"Sri Lanka Travel Guide",
						"Peru Travel Guide",
						"Bali Travel Guide",
					]}
				/>
				<FooterSectionColumn title="About Us" items={["Our Story", "Work with Us"]} />
				<FooterSectionColumn title="Contact Us" items={["Our Story", "Work with Us"]} />
			</div>
		</footer>
	);
};
