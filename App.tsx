import React from 'react';
import {View, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
