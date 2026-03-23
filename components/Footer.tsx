import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 MealApp</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: '#351401',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    footerText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Footer;
