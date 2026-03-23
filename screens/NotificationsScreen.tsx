import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
    { id: '1', message: 'New recipe added: Italian Pasta!' },
    { id: '2', message: 'Don\'t miss our special: Mexican Tacos!' },
    // Add more notifications
];

function NotificationsScreen() {
    const renderNotificationItem = ({ item }: any) => (
        <View style={styles.notificationItem}>
            <Text>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                data={notifications} 
                keyExtractor={item => item.id} 
                renderItem={renderNotificationItem} 
            />
        </View>
    );
}

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    notificationItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
});
