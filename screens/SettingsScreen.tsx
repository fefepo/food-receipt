import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

function SettingsScreen() {
    const [isNotificationsEnabled, setNotificationsEnabled] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Enable Notifications</Text>
                <Switch 
                    value={isNotificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch 
                    value={isNotificationsEnabled} // Placeholder for dark mode switch
                    onValueChange={setNotificationsEnabled} // Placeholder for dark mode switch handler
                />
            </View>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    settingText: {
        fontSize: 16,
    },
});
