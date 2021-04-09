import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import MainContent from './MainContent';
import Footer from './Footer';

const MainIndex = ({ navigation }) => {

    return (
        <View style={styles.main}>            
            <MainContent />
            <View style={styles.footer}>
                <Footer navigation={navigation} />                     
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    main : {        
        flex: 1,
        backgroundColor: '#ffffff',
    },
    footer: {
        flexGrow: 1,                     
        justifyContent: 'flex-end',
    }
});

export default MainIndex;