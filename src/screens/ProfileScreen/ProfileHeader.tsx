import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* profile image */}

        <Image style={styles.avatar} source={{uri: user.image}} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}> 98 </Text>
          <Text> POSTS </Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}> 98 </Text>
          <Text> Followers </Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}> 98 </Text>
          <Text> Following </Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name} </Text>

      <Text> {user.bio} </Text>

      {/* Buttons*/}
      <View style={styles.button}>
        <Button
          text=" Edit Profiile "
          onPress={() => console.warn('on edit profile')}
        />
        <Button
          text="  Extra Button"
          onPress={() => console.warn('extra button ')}
        />
      </View>
      {/*Gridview post*/}
    </View>
  );
};

export default ProfileHeader;
