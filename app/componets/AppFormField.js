import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';

function AppFormField({name, ...otherProps}) {

    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput 
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]} />  
        </>
    );
}

export default AppFormField;