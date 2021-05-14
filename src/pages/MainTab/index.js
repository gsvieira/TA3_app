import React, { useEffect } from 'react';
import { Text } from 'react-native'
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

export default () => {
    return (
        <Container>
            <Text>MainTab</Text>
        </Container>
    )
}