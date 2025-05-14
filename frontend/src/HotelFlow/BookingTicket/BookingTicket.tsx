import {
	BarCode,
	BuildingIcon,
	ClockIcon,
	DoorIcon,
	FunnyArrowIcon,
	LocationIcon,
	RightArrowIcon,
	ShareIcon,
} from "../../assets/Icons";

import CvkImage from "../../assets/HotelListing/Cvk.png";
import ProfileImage from "../../assets/FlightListing/ProfileImage.png";

export default function BookingTicket() {
	return (
		<div className="mx-auto w-full max-w-[1232px] py-6 flex flex-col h-max lg:px-4 md:py-4">
			<div className="w-full flex flex-col gap-8">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex justify-between w-full items-end lg:flex-col lg:items-start">
					{/* Left */}
					<div>
						<h2 className="font-primary font-bold text-2xl mb-4">
							CVK Park Bosphorus Hotel Istanbul
						</h2>
						<div>
							<div className="flex items-center mb-[8px]">
								<LocationIcon />{" "}
								<p className="font-medium text-[14px] opacity-75">
									Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
								</p>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="flex flex-col items-end gap-4 lg:flex-row lg:w-full lg:justify-between">
						<h2 className="text-[32px] font-bold text-slamon leading-[39px]">$265</h2>
						<div className="flex gap-4">
							<button
								type="button"
								className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
							>
								<ShareIcon />
							</button>
							<button
								type="button"
								className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] py-[16px] px-[40px] rounded-[4px]"
							>
								Download
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex mt-[40px] xl:flex-col">
				<div className="border-[#EAEAEA] border-[1px] bg-white w-full flex rounded-[1rem] overflow-hidden xl:flex-col">
					<div className="bg-[#EBF6F2] flex flex-col gap-4 w-full max-w-[246px] pl-[24px] pt-[34.5px] pb-[34.5px] pr-[34px] xl:max-w-full xl:flex-row xl:justify-between md:flex-col md:items-center">
						<div className="md:text-center">
							<h1 className="font-semibold text-[32px]">Thur, Dec 8</h1>
							<p className="text-[12px] opacity-60">Check-In</p>
						</div>
						<figure className="flex flex-col items-center gap-[8px] w-max">
							<FunnyArrowIcon />
							<BuildingIcon />
							<FunnyArrowIcon className="rotate-180" />
						</figure>
						<div className="md:text-center">
							<h1 className="font-semibold text-[32px]">Fri, Dec 9</h1>
							<p className="text-[12px] opacity-60">Check-Out</p>
						</div>
					</div>
					<div className="bg-white w-full max-w-[610px] relative xl:max-w-full">
						<div className="bg-mintGreen p-6 flex items-center justify-between md:flex-col md:gap-6 md:items-start">
							<div className="flex items-center gap-4">
								<img
									src={ProfileImage}
									alt="Profile Image"
									className="rounded-full w-full max-w-[4rem] border-[1px] border-white"
								/>
								<h1 className="font-primary font-bold text-[20px]">James Doe</h1>
							</div>
							<h4 className="w-full max-w-[228px] text-right text-[14px] font-primary font-bold md:text-left">
								Superior room - 1 double bed or 2 twin beds
							</h4>
						</div>
						<div className="flex gap-8 mx-6 mt-6 md:grid md:grid-cols-2 md:gap-4">
							<InfoItem icon={ClockIcon} label="Check-In time" value="12:00pm" />
							<InfoItem icon={ClockIcon} label="Check-Out time" value="12:00pm" />
							<InfoItem icon={DoorIcon} label="Room no." value="On arrival" />
						</div>
						<div className="pl-[30px] pt-[35px]">
							<h1 className="text-blackishGreen text-[32px] font-bold font-primary">EK</h1>
							<p className="text-[12px] font-medium opacity-60 ">ABC12345</p>
						</div>
						<figure className="absolute bottom-0 right-0">
							<BarCode />
						</figure>
					</div>
				</div>
				<div className="bg-white w-full justify-items-center content-center max-w-[375px] rounded-[1rem] border-[#EAEAEA] border-[1px]">
					<img src={CvkImage} alt="Logo for CVK" />
				</div>
			</div>

			<div className="mx-auto w-full max-w-[1232px] py-6">
				<h1 className="text-[24px] text-blackishGreen font-semibold pb-[34px]">
					Terms and Conditions
				</h1>
				<div>
					<h3 className="font-medium text-[20px] pb-[16px]">Payments</h3>
					<ul className="list-disc pl-10 flex flex-col gap-4 text-[14px] text-blackishGreen leading-[20px] custom-list">
						<li>
							If you are purchasing your ticket using a debit or credit card via the Website, we
							will process these payments via the automated secure common payment gateway which will
							be subject to fraud screening purposes.
						</li>
						<li>
							If you do not supply the correct card billing address and/or cardholder information,
							your booking will not be confirmed and the overall cost may increase. We reserve the
							right to cancel your booking if payment is declined for any reason or if you have
							supplied incorrect card information. If we become aware of, or is notified of, any
							fraud or illegal activity associated with the payment for the booking, the booking
							will be cancelled and you will be liable for all costs and expenses arising from such
							cancellation, without prejudice to any action that may be taken against us.
						</li>
						<li>
							Golobe may require the card holder to provide additional payment verification upon
							request by either submitting an online form or visiting the nearest Golobe office, or
							at the airport at the time of check-in. Golobe reserves the right to deny boarding or
							to collect a guarantee payment (in cash or from another credit card) if the card
							originally used for the purchase cannot be presented by the cardholder at check-in or
							when collecting the tickets, or in the case the original payment has been withheld or
							disputed by the card issuing bank. Credit card details are held in a secured
							environment and transferred through an internationally accepted system.
						</li>
					</ul>
					<div>
						<h3 className="font-medium text-[20px] pb-[16px] mt-[34px]">Contact Us</h3>
						<p>
							If you have any questions about our Website or our Terms of Use, please contact:
							<br />
							Golobe Group Q.C.S.C
							<br />
							Golobe Tower
							<br />
							P.O. Box: 22550
							<br />
							Doha, State of Qatar
							<br />
							Further contact details can be found at golobe.com/help
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

type InfoItemProps = {
	icon: React.ElementType;
	label: string;
	value: string;
	bgColor?: string;
};

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => {
	return (
		<div className="flex gap-2 items-center">
			<figure className="w-8 h-8 bg-[#EBF6F2] flex justify-center items-center rounded-[4px]">
				<Icon />
			</figure>
			<div>
				<p className="font-semibold text-[12px] opacity-60">{label}</p>
				<p className="font-medium">{value}</p>
			</div>
		</div>
	);
};
