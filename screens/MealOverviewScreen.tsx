import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealOverviewScreen({ route, navigation }: any){
    const id = route.params.categoryId;

    // 화면 제목을 카테고리 이름으로 동적으로 변경
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id)?.title;
        navigation.setOptions({ title: categoryTitle });
    }, [id, navigation]);

    // 선택된 카테고리에 속하는 음식만 필터링
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0;
    });

    // FlatList 아이템 렌더링
    const renderMealItem = (itemData: any) => {
        return (
            <MealItem 
                id={itemData.item.id}
                title={itemData.item.title} 
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    navigation.navigate('MealDetail', {
                        mealId: itemData.item.id
                    });
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});