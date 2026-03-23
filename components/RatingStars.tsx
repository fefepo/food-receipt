import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxRating = 5 }) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <Ionicons
                key={i}
                name={i <= rating ? 'star' : 'star-outline'}
                size={20}
                color={i <= rating ? '#ffdd00' : '#ccc'}
            />
        );
    }

    return <View style={styles.stars}>{stars}</View>;
};

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
    },
});

export default RatingStars;
