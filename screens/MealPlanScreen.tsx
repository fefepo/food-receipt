import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealPlanScreen() {
    const mealPlan = MEALS.slice(0, 7); // Assuming the first 7 meals are for the meal plan

    const renderMealItem = ({ item }: any) => (
        <MealItem 
            id={item.id}
            title={item.title} 
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weekly Meal Plan</Text>
            <FlatList 
                data={mealPlan} 
                keyExtractor={item => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    );
}

export default MealPlanScreen;

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
});
