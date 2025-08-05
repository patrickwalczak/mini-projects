import React from 'react';

const FieldWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="form__field">{children}</div>;
};

export default FieldWrapper;
