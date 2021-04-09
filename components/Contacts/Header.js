import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
    return(
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabActive}>সকল কন্টাক্টস</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>হালখাতা কন্টাক্টস</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer : {
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 5,        
    },
    tab: {
        paddingHorizontal: 8
    },
    tabActive: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tabText: {
        fontSize: 18,
        color: '#909090',
    },
    
})

export default Header;