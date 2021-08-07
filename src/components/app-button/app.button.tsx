import React from 'react';
import { Text, TouchableHighlight, ViewStyle } from 'react-native';

interface Props{
  title: string,
  onPress: ()=> void,
  style?: ViewStyle
}
function AppButton (props: Props) {
  const { title, onPress, style } = props;
  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}>
      <Text style={{ color: 'white' }}>
        {title}
      </Text>
    </TouchableHighlight>
  );
}

export default React.memo(AppButton);
