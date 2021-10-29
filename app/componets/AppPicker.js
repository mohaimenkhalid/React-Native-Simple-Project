import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Alert, Button, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({icon, items, placeholder, selectedItem, onSelectedItem}) {
    const [modalVisiable, setModalVisible] = useState(false);
    return (
       <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} color={color.medium} size={25} />}
                    
                    {
                        selectedItem ? 
                            <AppText style={styles.text}>{selectedItem.label}</AppText> :
                            <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }   

                    
                    <MaterialCommunityIcons style={styles.icon} name="chevron-down" color={defaultStyles.color.medium} size={25} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisiable} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false) } />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                            <PickerItem 
                                label={item.label} 
                                onPress={()=> {
                                    onSelectedItem(item)
                                    setModalVisible(false)
                                }} 
                            /> 
                        }
                    />
                </Screen>
            </Modal>
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.light,
        borderRadius: 15,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    text: {
        marginLeft: 10,
        flex: 1
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: color.medium
    }
})

export default AppPicker;