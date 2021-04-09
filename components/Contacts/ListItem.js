import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({id, name, number, listed}) => {
    let infoRight;
    if (listed) {
        infoRight = <View style={styles.contactBadge}><Text style={styles.badgeText}>হালখাতা কন্টাক্ট</Text></View>;
    }else {
        infoRight = <View></View>
    }

    return(
        <View style={styles.mainContent}>
            <View style={styles.infoLeft}>
                <View style={styles.circle}></View>
                <View style={styles.contact}>
                    <Text style={styles.contactName}>{name}</Text>
                    <Text style={styles.contactNumber}>{number}</Text>
                </View>
            </View>
            {infoRight}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
    },
    infoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },    
    circle: {
        backgroundColor: "#7f7f7f",
        width:40,
        height:40,
        borderRadius:50,
    },
    contact: {
        justifyContent: 'space-between',
        marginHorizontal: 8,
    },
    contactName: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contactNumber:{
        color: '#7f7f7f',
        fontSize: 16
    },
    contactBadge: {        
        backgroundColor: '#E5C589',
        paddingVertical: 4,
        minWidth: '30%',        
        borderRadius: 12        
    },
    badgeText: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})

export default ListItem;