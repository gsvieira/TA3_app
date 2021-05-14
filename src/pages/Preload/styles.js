import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-content: center
`;

const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
 `;


export { Container, LoadingIcon }