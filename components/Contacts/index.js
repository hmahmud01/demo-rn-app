import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Header';
import List from './List';

const Contacts = () => {
    return(
        <View>
            <Header />
            <View style={styles.horizontalLine}></View>
            <List />            
        </View>
    )
}

const styles = StyleSheet.create({
    horizontalLine: {
        marginVertical: 5,
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        width: '100%',               
    },
})

export default Contacts;