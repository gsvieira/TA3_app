/* import AsyncStorage from '@react-native-community/async-storage';
import { add } from 'react-native-reanimated';

const BASE_API = 'https://localhost:3333';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/sessions`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();        
        return json;
    },
    getBarbers: async (lat=null, lng=null, address=null) => {
        const token = await AsyncStorage.getItem('token');

        console.log("LAT", lat);
        console.log("LNG", lng);
        console.log("ADDRESS", address);

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const json = await req.json();
        return json;
    }

}; */

import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:3333'
})

export default api;


















