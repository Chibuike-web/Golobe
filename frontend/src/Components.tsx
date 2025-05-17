export type CheckboxProps = {
	id?: number;
	title: string;
	checkedColor?: string;
	className?: string;
};

export const Checkbox = ({
	id,
	title,
	className = "",
	checkedColor = "#112211",
}: CheckboxProps) => {
	return (
		<label htmlFor={`checkbox-${id}`} className="flex gap-3 items-center ">
			<input
				type="checkbox"
				name={`checkbox-${id}`}
				id={`checkbox-${id}`}
				className={className}
				style={{ "--checked-bg-color": checkedColor } as React.CSSProperties}
			/>
			<p className="font-medium text-[14px] leading-[17px]">{title}</p>
		</label>
	);
};

export const RatingButton = ({ text, id }: { text: number; id: string }) => {
	return (
		<span
			id={id}
			className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium"
		>
			{text}+
		</span>
	);
};
