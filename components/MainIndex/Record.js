import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Record = (props) => {
    return(
        <View>
            <Text style={styles.title}> {props.title} </Text>
            <Text style={[styles.value, {color: props.color}]}> {props.value} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 18,        
    },
    value : {
        fontSize: 28,
        fontWeight: "500"
    }
})

export default Record;