import CTAImage from "../../assets/LandingPage/emojione-v1_open-mailbox-with-lowered-flag.svg";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../../assets/icons";
import FooterLogo from "../../assets/LandingPage/Logo.svg";

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
			className=" w-full mt-[-151px] max-w-[77rem] mx-auto flex items-end justify-between bg-[#CDEAE1] px-6 rounded-[20px] lg:flex-col lg:items-start"
		>
			<div className="py-6 w-full max-w-[600px]">
				<header>
					<h2
						id="cta-heading"
						className="font-primary text-blackishGreen font-bold text-[44px] md:text-[2rem] md:leading-[40px] w-full max-w-[364px] leading-[54px] mb-[24px]"
					>
						Subscribe Newsletter
					</h2>
					<p className="font-primary text-blackishGreen opacity-80 text-xl font-bold mb-[8px]">
						The Travel
					</p>
				</header>
				<p className="text-blackishGreen opacity-70 font-medium mb-4 w-full">
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

const Footer = () => {
	return (
		<footer className="max-w-[77rem] w-full mt-[4rem] mx-auto flex gap-[140px] md:gap-[70px] md:flex-col">
			<div className="w-max">
				<img src={FooterLogo} alt="Footer logo" />
				<div className="flex justify-between mt-6">
					<FacebookIcon />
					<TwitterIcon />
					<YoutubeIcon />
					<InstagramIcon />
				</div>
			</div>
			<div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,_minmax(11rem,1fr))]">
				<section className="flex flex-col gap-4">
					<h2 className="text-blackishGreen font-bold font-primary">Our Destinations</h2>
					<div className="flex flex-col gap-3 text-[14px] font-medium text-blackishGreen opacity-70">
						<p>Canada</p>
						<p>Alaksa</p>
						<p>France</p>
						<p>Iceland</p>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="text-blackishGreen font-bold font-primary">Our Activities</h2>
					<div className="flex flex-col gap-3 text-[14px] font-medium text-blackishGreen opacity-70">
						<p>Northern Lights</p>
						<p>Cruising & sailing</p>
						<p>Multi-activities</p>
						<p>Kayaing</p>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<div className="flex flex-col gap-3 text-[14px] font-medium text-blackishGreen opacity-70">
						<h2 className="text-blackishGreen font-bold font-primary">Travel Blogs</h2>
						<p>Bali Travel Guide</p>
						<p>Sri Lanks Travel Guide</p>
						<p>Peru Travel Guide</p>
						<p>Bali Travel Guide</p>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="text-blackishGreen font-bold font-primary">About Us</h2>
					<div className="flex flex-col gap-3 text-[14px] font-medium text-blackishGreen opacity-70">
						<p>Our Story</p>
						<p>Work with us</p>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="text-blackishGreen font-bold font-primary">Contact Us</h2>
					<div className="flex flex-col gap-3 text-[14px] font-medium text-blackishGreen opacity-70">
						<p>Our Story</p>
						<p>Work with us</p>
					</div>
				</section>
			</div>
		</footer>
	);
};
