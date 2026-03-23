import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function UserProfileScreen() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://example.com/user-avatar.png' }} 
                style={styles.avatar}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
        </View>
    );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#888',
    },
});
