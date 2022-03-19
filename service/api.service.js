import axios from 'axios';
import https from 'https';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token){
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KYE]')
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: '592e763b3eb774d846c3408af7070b80',
            lang: 'ru',
            units: 'metric'
        }
    });
    console.log(data);
    

}

export {getWeather};