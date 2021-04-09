import React, { cloneElement } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import Record from './Record';

const MainContent = () => {
    return(
        <View>
            <View style={styles.content}>            
                <View style={styles.recordContent}> 
                    <Record title="মোট বকেয়াঃ" color="#ff0000" value="০.০০"/>
                    <Record title="মোট আদায়কৃতঃ" color="#00b300" value="০.০০"/>
                </View>
                <View style={styles.verticelLine}></View>
                <View style={styles.recordContent}> 
                    <Record title="মোট বকেয়াকারী" color="#000" value="০.০০"/>
                </View>            
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={[styles.button,{backgroundColor: '#c2c2c2'}]}>
                    <Text style={styles.buttonLabel}>বকেয়াকারী</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#f1f1f1'}]}>
                    <Text style={styles.buttonLabel}>পরিশোধকারী</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomTextArea}>
                <Text style={styles.bottomText}>
                    এই মুহূর্তে আপনার কোন বকেয়াকারী নেই। নতুন বকেয়াকারী এড করতে হলে + বাটন টি চাপুন এবং প্রয়োজনীয় তত্থ পূরণ করুন।
                </Text>                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    content: {               
        alignItems: 'center',
        flexDirection: 'row',                
        width: '100%',        
        marginTop: 20,
        marginBottom: 20,
    },
    verticelLine: {
        height: '90%',
        width: 2,
        backgroundColor: '#909090',
    },
    horizontalLine: {
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        width: '90%',        
        alignSelf: 'center',
    },
    recordContent: {
        paddingHorizontal: 10,
        width: '49%',
    },
    buttonArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',    
        marginVertical: 30,    
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 1,
        backgroundColor: "oldlace",        
        marginBottom: 6,        
        textAlign: "center",
        minWidth: '30%',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000",
        alignSelf: 'center'
    },
    bottomTextArea: {                
        marginTop: 40,
        paddingHorizontal: 60,        
        paddingVertical: 30,        
        alignSelf: 'center',
        marginBottom: 20,
    },
    bottomText: {
        textAlign: 'center',
        color: '#7f7f7f',
        lineHeight: 24
    }    
})

export default MainContent;
