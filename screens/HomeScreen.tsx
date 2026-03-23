import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Button 
                title="Categories"
                onPress={() => navigation.navigate('CountryMeals')}
            />
            <Button 
                title="Search"
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});
