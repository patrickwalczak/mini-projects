import FormField from './Field';
import './index.css';

const ContactForm = () => {
	return (
		<div className="form__wrapper">
			<h2 className="form__title">Contact Us</h2>
			<form className="form__element">
				<div className="form__row">
					<FormField
						label="First Name"
						required
						name="firstName"
						value=""
						onChange={() => {}}
						onBlur={() => {}}
						error={''}
					/>
					<FormField
						label="Last Name"
						required
						name="lastName"
						value=""
						onChange={() => {}}
						onBlur={() => {}}
						error={''}
					/>
				</div>

				<FormField
					label="Email Address"
					required
					name="email"
					value=""
					type="email"
					onChange={() => {}}
					onBlur={() => {}}
					error={''}
				/>

				<div className="form__radio">
					<span className="">
						Query Type <span className="form__required">*</span>
					</span>

					<div className="radio__group">
						<label className="radio__card">
							<input className="radio__hidden" type="radio" name="queryType" value="general" />
							<span className="radio-custom"></span>
							<span className="radio-label">General Enquiry</span>
						</label>

						<label className="radio__card">
							<input className="radio__hidden" type="radio" name="queryType" value="support" />
							<span className="radio-custom"></span>
							<span className="radio-label">Support Request</span>
						</label>
					</div>
				</div>

				<button className="form__button">Submit</button>
			</form>
		</div>
	);
};

export default ContactForm;
