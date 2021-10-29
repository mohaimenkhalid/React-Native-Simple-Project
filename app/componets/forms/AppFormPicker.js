import React from 'react';
import AppPicker from '../AppPicker';
import {useFormikContext} from 'formik';
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder}) {
    const {setFieldValue, errors, touched, values} = useFormikContext();
    return (
        <AppPicker
            items={items}
            placeholder={placeholder}
            onSelectedItem={(item) => setFieldValue(name, item)}
            selectedItem={values[name]}
        >
            <ErrorMessage error={errors[name]} visible={touched[name]} />  
        </AppPicker>
    );
}

export default AppFormPicker;