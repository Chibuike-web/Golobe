import HeroImage from "../assets/Account/HeroImage.png";
import { EditIcon, UploadIcon } from "../assets/Icons";
import ProfileImage from "../assets/FlightListing/ProfileImage.png";

export default function Account() {
	return (
		<div className="mx-auto w-full max-w-[1232px] py-6">
			<figure className="relative">
				<img src={HeroImage} alt="Account Hero Image" />
				<button
					type="button"
					className=" absolute bottom-[26px] right-[26px] flex bg-mintGreen justify-center items-center font-semibold text-[14px] py-[16px] px-[24px] gap-2 rounded-[4px]"
				>
					<UploadIcon />
					Upload new cover
				</button>
			</figure>
			<div className="mx-auto mt-[-80px] w-max">
				<figure className="relative w-max rounded-full ring-[4px] ring-slamon">
					<img
						src={ProfileImage}
						alt="Profile Image"
						className=" w-full max-w-[160px] flex-shrink-0"
					/>
					<span className="bg-slamon block rounded-full p-[10px] absolute bottom-0 right-0">
						<EditIcon />
					</span>
				</figure>

				<h1 className="text-center mt-[24px] font-semibold text-[24px] mb-[8px]">John Doe.</h1>
				<p className="text-center">john.doe@gmail.com</p>
			</div>
			Account
		</div>
	);
}
