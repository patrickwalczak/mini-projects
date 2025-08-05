import FieldWrapper from './FieldWrapper';
import Label from './Label';

const FormField = ({
	label,
	error,
	type = 'text',
	name,
	placeholder = '',
	required = false,
	labelClassName = '',
	InputClassName = '',
	value,
	onChange,
	onBlur,
}: {
	label: string;
	error: string;
	type?: string;
	name: string;
	placeholder?: string;
	required?: boolean;
	labelClassName?: string;
	InputClassName?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}) => {
	return (
		<FieldWrapper>
			<Label label={label} name={name} labelClassName={labelClassName} required={required} />
			<input
				className={`form__input ${InputClassName}`}
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				required={required}
				aria-required={required}
				aria-describedby={`${name}-error`}
				aria-invalid={!!error}
			/>
			{error && (
				<span className="form__error" id={`${name}-error`} role="alert">
					{error}
				</span>
			)}
		</FieldWrapper>
	);
};

export default FormField;
