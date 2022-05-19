import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.post}>
      {/*hEADER */}
      {/*content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg ',
        }}
        style={styles.image}
      />

      {/*footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {paddingTop: 50},
  image: {
    width: 300,
    height: 300,
  },
});

export default App;
