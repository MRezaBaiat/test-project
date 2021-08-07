import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SummaryScreen (props) {
  const { address, postalCode, date, type } = props.route.params;
  const d = new Date(date);
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.default}>
        Date: {`${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`}
      </Text>
      <Text style={styles.default}>
        type: {type}
      </Text>
      <Text style={styles.default}>
        Address: {address}
      </Text>
      <Text style={styles.default}>
        Postal/Zip Code: {postalCode}
      </Text>
    </View>
  );
}

export default React.memo(SummaryScreen);

const styles = StyleSheet.create({
  default:{
    marginTop: 3,
    marginBottom: 3
  }
})
