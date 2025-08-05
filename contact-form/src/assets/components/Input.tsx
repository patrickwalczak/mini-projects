import React from 'react';

const Input = ({
	error,
	type = 'text',
	name,
	placeholder = '',
	required = false,
	InputClassName = '',
	value,
	onChange,
	onBlur,
}: {
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
	);
};

export default Input;
