import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import '~/config/ReactotronConfig';

//import Routes from '~/routes';
//const App = () => <Routes />;

import UserContextProvider from '~/contexts/UserContext'
import MainStack from '~/stacks/MainStack'


export default () => {
    return(
        <UserContextProvider>
            <NavigationContainer>
                <MainStack />   
            </NavigationContainer>
        </UserContextProvider>
    )
}
