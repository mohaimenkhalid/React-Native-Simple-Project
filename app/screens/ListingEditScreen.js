import React, {useState} from 'react';
import { StyleSheet } from 'react-native'
import { AppForm, AppFormField, FormSubmitButton, AppFormPicker } from '../componets/forms';
import Screen from '../componets/Screen';
import * as Yap from 'yup';
import AppPicker from '../componets/AppPicker';

let validationSchema = Yap.object().shape({
    title: Yap.string().required().min(1).label("Title"),
    price: Yap.number().required().min(1).max(10000).label("Price"),
    description: Yap.string().label("Description"),
    category: Yap.object().required().nullable().label("Category")
});

const categories = [
    {label: "Furniture", value: 1},
    {label: "Book", value: 2},
    {label: "Camera", value: 3},
  ]

function ListingEditScreen(props) {
    const [selectedCategory, setSelectedCategory] = useState('')
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null
                }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                <AppFormField 
                    name='title'
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField 
                    name='price'
                    placeholder="Price"
                    maxLength={8}
                    keyboardType="numeric"
                />
                <AppFormPicker 
                    name='category'
                    placeholder="Category"
                    items={categories}
                    selectedItem={selectedCategory} 
                    onSelectedItem={items => setSelectedCategory(items)}
                />
                <AppFormField 
                    name='description'
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLine={3}
                />

                <FormSubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default ListingEditScreen;