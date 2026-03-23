import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface UserAvatarProps {
    uri: string;
    size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ uri, size = 50 }) => {
    return <Image source={{ uri }} style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />;
};

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default UserAvatar;
