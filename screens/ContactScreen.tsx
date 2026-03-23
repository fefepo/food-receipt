import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ContactScreen() {
    const handleContactUs = () => {
        // Add contact functionality
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.content}>
                If you have any questions or feedback, feel free to reach out to us.
            </Text>
            <Button title="Contact Us" onPress={handleContactUs} />
        </View>
    );
}

export default ContactScreen;

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
        marginBottom: 16,
    },
});
