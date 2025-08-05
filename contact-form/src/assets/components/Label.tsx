const Label = ({
	label,
	name,
	labelClassName = '',
	required = false,
}: {
	label: string;
	name: string;
	labelClassName?: string;
	required?: boolean;
}) => {
	return (
		<label className={`form__label ${labelClassName}`} htmlFor={name}>
			{label} {required && <span className="form__required">*</span>}
		</label>
	);
};

export default Label;
