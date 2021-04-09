import React from 'react';
import {View, ScrollView} from 'react-native';

import ListItem from './ListItem';

const List = () => {    
    const items = [
        {id: 1, name: "Sadat", number: "01722158224", listed: true},
        {id: 2, name: "Arannya Bhai", number: "01722158224", listed: true},
        {id: 3, name: "Din Islam", number: "01722158224", listed: false},
        {id: 4, name: "Boro Bhabi", number: "01722158224", listed: false},
        {id: 5, name: "Bidyut Mistree", number: "01722158224", listed: false},
        {id: 6, name: "Anwar Pasha", number: "01722158224", listed: false},
        {id: 7, name: "Puja Devi", number: "01722158224", listed: false},
        {id: 8, name: "Sanket Mama", number: "01722158224", listed: false},
    ]
    const contacts = items.map(item => (<ListItem id={item.id} name={item.name} number={item.number} listed={item.listed}/>))

    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {contacts}    
            </ScrollView>
        </View>
    )

}

export default List;