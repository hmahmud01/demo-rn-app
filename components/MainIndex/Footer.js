import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const Footer = ({ navigation }) => {
    return(
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerBtn} onPress={() => navigation.navigate('Contacts')}>
                <Text style={styles.footerBtnContent}> + </Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',        
        justifyContent: 'flex-end',
        margin: 20,
    },
    footerBtn: {
        backgroundColor:'#b20000',
        width:65,
        height:65,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 8,        
    },
    footerBtnContent: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "normal"
    }    
})

export default Footer;
