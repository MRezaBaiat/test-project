import axios from 'axios';
import Configs from '../config/configs';
import { Address } from '../../index';

export default class GeocodeApi {
    public static geocode = (address: string): Promise<Address[]> => {
      return axios.get(`https://api.geocod.io/v1.6/geocode?q=${address}&api_key=${Configs.GEOCOD_API_KEY}`)
        .then(res => res.data.results);
    }
}
