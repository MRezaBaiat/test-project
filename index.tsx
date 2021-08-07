import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';

export interface Address{
  formatted_address: string,
  location:{lat: number, lng: number},
  address_components:{
    zip: string
  }
}
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

LogBox.ignoreAllLogs();// Hide all warning notifications on front-end
AppRegistry.registerComponent('test', () => App);
