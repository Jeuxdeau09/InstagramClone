import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xlg}}>
        Hello World
        <AntDesign name="left" size={33}/>
      </Text>
    </View>
  );
};

export default App;
