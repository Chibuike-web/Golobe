import { AddEmailIcon, ChangeIcon } from "../assets/Icons";

type AccountInfo = {
	id: number;
	label: string;
	value: string;
};

const accountInformation: AccountInfo[] = [
	{ id: 1, label: "Name", value: "John Doe" },
	{ id: 2, label: "Email", value: "john.doe@gmail.com" },
	{ id: 3, label: "Password", value: "************" },
	{ id: 4, label: "Phone number", value: "+1 000-000-0000" },
	{ id: 5, label: "Address", value: "St 32 main downtown, Los Angeles, California, USA" },
	{ id: 6, label: "Date of birth", value: "01-01-1992" },
];

export default function AccountTab() {
	return (
		<div className="md:px-4">
			<h1 className="font-bold font-primary text-[2rem] mt-10 mb-4">Account</h1>
			<div className="flex flex-col gap-8 bg-white py-8 px-8 md:px-6 md:py-6 rounded-[1rem] shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				{accountInformation.map(({ id, label, value }: AccountInfo) => (
					<AccountMenu key={id} id={id} label={label} value={value} />
				))}
			</div>
		</div>
	);
}

const AccountMenu = ({ id, label, value }: AccountInfo) => {
	return (
		<div className="w-full flex justify-between md:flex-col gap-[4px]">
			<div className="flex flex-col gap-[8px]">
				<p className="text-blackishGreen/75">{label}</p>
				<h5 className="font-semibold text-[20px] md:text-[18px]">{value}</h5>
			</div>

			<div className="flex gap-[8px] md:flex-col">
				{id === 2 && (
					<button
						type="button"
						className="flex bg-white border-[1px] border-mintGreen justify-center items-center font-semibold text-[14px] py-[16px] px-[24px] gap-2 rounded-[4px]"
					>
						<AddEmailIcon />
						Add another email
					</button>
				)}
				<button
					type="button"
					className="flex bg-white border-[1px] border-mintGreen justify-center items-center font-semibold text-[14px] py-[16px] px-[24px] gap-2 rounded-[4px]"
				>
					<ChangeIcon />
					Change
				</button>
			</div>
		</div>
	);
};
