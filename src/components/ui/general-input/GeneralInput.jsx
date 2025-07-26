import React from 'react';
import InputStyle from './GeneralInput.Style.jsx';

const GeneralInput = ({ label, ...props }) => {
    return (
        <InputStyle.InputWrapper>
            <label>{label}</label>
            <InputStyle.InputField {...props} />
        </InputStyle.InputWrapper>
    );
};

export default GeneralInput;
