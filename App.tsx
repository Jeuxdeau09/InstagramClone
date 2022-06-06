import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={posts[0]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
