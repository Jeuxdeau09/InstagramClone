import {Image, Text, View, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';

import FeedGridView from '../../components/FeedGridView';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {useriD} = route.params;

  //RECEIVe userid from params then query and find based on userid.   DONT Send full objects.. only send identifiers.

  navigation.setOptions({title: user.username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
