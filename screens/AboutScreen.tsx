import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.content}>
                Welcome to the Country Meals App! We provide a wide variety of recipes from around the world. Enjoy exploring and cooking delicious meals!
            </Text>
        </View>
    );
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
    },
});
