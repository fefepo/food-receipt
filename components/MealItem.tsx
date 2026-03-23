import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import MealDetails from '../components/MealDetails'; // Import MealDetails

function MealItem({ id, title, imageUrl, duration, complexity, affordability, onSelectMeal }: any) {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={onSelectMeal}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
});
