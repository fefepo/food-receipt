import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function RecipeBookScreen() {
    const recipeBook = MEALS.filter(meal => meal.isSaved);

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
            <FlatList 
                data={recipeBook} 
                keyExtractor={item => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    );
}

export default RecipeBookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
