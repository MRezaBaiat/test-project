import React, { useState } from 'react';
import { DatePickerAndroid, Picker, Text, TextInput, TouchableHighlight, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AppNavigator from '../navigation/app.navigator';
import AppButton from '../components/app-button/app.button';

enum Types{
  SEA = 'SEA',
  AIR = 'AIR',
  ROAD = 'ROAD'
}

function ShipmentScreen (props) {
  const { address, postalCode } = props.route.params;
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(Types.SEA);
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', flexDirection: 'column' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Set a date:
        </Text>
        <DatePicker
          date={date}
          onDateChange={(d) => setDate(d)}
        />
        <Text style={{ marginTop: 50 }}>
          Select Shipment Type:
        </Text>
        <Picker
          style={{ height: 50, width: 150, marginTop: 10 }}
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => setType(itemValue)}
        >
          {
            Object.keys(Types).map((key) => {
              return <Picker.Item label={key} value={Types[key]}/>;
            })
          }
        </Picker>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <AppButton
          style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10, elevation: 3, backgroundColor: 'red' }}
          title={'Next'}
          onPress={() => {
            postalCode && address && AppNavigator.navigateTo('summary-screen', { address, postalCode, date: date.toISOString(), type });
          }}
        />
      </View>
    </View>
  );
}

export default React.memo(ShipmentScreen);
