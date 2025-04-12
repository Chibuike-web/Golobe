import CTAImage from "../assets/LandingPage/emojione-v1_open-mailbox-with-lowered-flag.svg";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../assets/Icons";
import FooterLogo from "../assets/LandingPage/Logo.svg";

export default function FooterSection() {
	return (
		<section className="pb-[4rem] flex flex-col bg-mintGreen mt-[15.0625rem] px-4">
			<CTA />
			<Footer />
		</section>
	);
}

const CTA = () => {
	return (
		<section
			aria-labelledby="cta-heading"
			className="w-full mt-[-9.4375rem] max-w-[77rem] mx-auto flex items-end justify-between bg-[#CDEAE1] px-6 rounded-[1.25rem] lg:flex-col lg:items-start"
		>
			<div className="py-6 w-full max-w-[37.5rem]">
				<header>
					<h2
						id="cta-heading"
						className="font-primary text-blackishGreen font-bold text-[2.75rem] md:text-[2rem] md:leading-[2.5rem] w-full max-w-[22.75rem] leading-[3.375rem] mb-[1.5rem]"
					>
						Subscribe Newsletter
					</h2>
					<p className="font-primary text-xl font-bold mb-[0.5rem] text-[rgba(17,34,17,0.8)]">
						The Travel
					</p>
				</header>
				<p className=" font-medium mb-4 w-full text-[rgba(17,34,17,0.7)]">
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
						className="px-4 py-[1.125rem] w-full rounded-[0.25rem]"
					/>
					<input
						type="submit"
						value="Subscribe"
						className="px-4 h-[3.5rem] rounded-[0.25rem] bg-blackishGreen text-white"
					/>
				</form>
			</div>
			<figure>
				<img src={CTAImage} alt="Travel inspiration" />
			</figure>
		</section>
	);
};

type FooterColumnProps = {
	title: string;
	items: string[];
};

const FooterSectionColumn = ({ title, items }: FooterColumnProps) => (
	<section className="flex flex-col gap-4">
		<h2 className="text-blackishGreen font-bold font-primary">{title}</h2>
		<ul
			className="flex flex-col gap-3 text-[0.875rem] font-medium"
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
		<footer className="max-w-[77rem] w-full mt-[4rem] mx-auto flex gap-[8.75rem] md:gap-[4.375rem] md:flex-col">
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
