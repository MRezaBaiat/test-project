import * as React from 'react';
import {
  View,
  PermissionsAndroid,
  Platform,
  Button,
  TextInput,
  Picker,
  FlatList, Text, TouchableHighlight, Animated
} from 'react-native';
import MapView, { AnimatedRegion, LatLng, Marker } from 'react-native-maps';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchGeocodeResults } from '../redux/actions/actions';
import useKeyboard from '@rnhooks/keyboard';
import { Address } from '../../index';
import AppNavigator from '../navigation/app.navigator';
import AppButton from '../components/app-button/app.button';

function MainScreen () {
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [focused, setFocused] = useState(true);
  const [location, setLocation] = useState(undefined as LatLng | undefined);
  const searchResults = useSelector((s: any) => s.global.results as Address[]);
  const ref = useRef(undefined as MapView | undefined);
  const [keyboardVisible, dismissKeyBoard] = useKeyboard();
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current && focused && location && ref.current.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }, 2000);
  }, [focused, location, ref.current]);

  return (
        <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              flexDirection: 'column'
            }}
        >

          <AppButton
            style={{ marginBottom: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10, elevation: 3, backgroundColor: 'lightblue' }}
            onPress={() => setFocused(true)}
            title={'My Location'}
          />
          <View style={{ flex: 1 }}>
            <MapView
              ref={ref}
              showsMyLocationButton={false}
              showsUserLocation={true}
              onUserLocationChange={event => setLocation(event.nativeEvent.coordinate)}
              onTouchStart={() => setFocused(false)}
              style={{
                width: '100%',
                height: '100%'
              }} />

          </View>
          <View style={{ width: '100%', minHeight: '7%', padding: 7 }}>
            <TextInput
              style={{ marginTop: 5, marginBottom: 5 }}
              value={address}
              onFocus={console.log}
              placeholder={'Search'}
              onChangeText={(text) => {
                setAddress(text);
                dispatch(actionFetchGeocodeResults(text));
              }}
            />
            {
              keyboardVisible &&
              <FlatList
                keyboardShouldPersistTaps={'handled'}
                data={searchResults}
                renderItem={(item) =>
                  <TouchableHighlight key={String(item.index)} onPress={() => {
                    setFocused(false);
                    ref.current?.animateToRegion({
                      latitude: item.item.location.lat,
                      longitude: item.item.location.lng,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01
                    }, 2000);
                    setAddress(item.item.formatted_address);
                    setPostalCode(item.item.address_components.zip);
                    dismissKeyBoard();
                  }}>
                    <Text style={{ padding: 7 }}>
                      {
                        item.item.formatted_address
                      }
                    </Text>
                  </TouchableHighlight>
                }
              />
            }
            <TextInput
              style={{ marginTop: 5, marginBottom: 5 }}
              value={postalCode}
              placeholder={'Zip/Postal'}
              onChangeText={text => setPostalCode(text)}
            />

          </View>
          <AppButton
            style={{ marginBottom: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10, elevation: 3, backgroundColor: 'red' }}
            title={'Confirm Location'}
            onPress={() => postalCode && address && AppNavigator.navigateTo('shipment-screen', { address, postalCode })}
          />
        </View>
  );
}
export default React.memo(MainScreen);
