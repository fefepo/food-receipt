import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function SearchScreen({ navigation }: any) {  // 🔹 navigation 받기
    const [searchTerm, setSearchTerm] = useState('');

    // 검색어에 맞는 음식 필터링
    const filteredMeals = MEALS.filter(meal => 
        meal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // FlatList 아이템 렌더링
    const renderMealItem = ({ item }: any) => (
        <MealItem 
            id={item.id}
            title={item.title} 
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            onSelectMeal={() => {   // 🔹 클릭 시 상세 화면 이동
                navigation.navigate('MealDetail', {
                    mealId: item.id
                });
            }}
        />
    );

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Search meals..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList 
                data={filteredMeals} 
                keyExtractor={item => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
    },
});