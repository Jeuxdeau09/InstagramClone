import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.post}>
      {/*hEADER */}
      <View style={styles.header}>
        <Image
          source={require('/Users/user/Desktop/ReactNative/InstagramClone/src/assets/pictures/2.jpeg')}
          style={styles.userAvatar}
        />

        <Text style={styles.userName}>Jeuxdeau</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/*content */}
      <Image
        source={require('/Users/user/Desktop/ReactNative/InstagramClone/src/assets/pictures/1.jpeg')}
        style={styles.image}
      />

      {/*footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* likes */}
        <Text style={styles.text}>
          Liked by
          <Text style={styles.bold}> Kristen </Text> and
          <Text style={styles.bold}> 527 others </Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}> Yooooo </Text>
          Jason is here Jason is hereJason is hereJason is hereJason is here
          Jason is here Jason is here Jason is here Jason is here Jason is here
          Jason is here
        </Text>

        {/* Comments */}
        <Text> View all comments 15</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}> Yooooo </Text>
            hagjal;gwlieg skdgnaiegsldkglaiheg sil;gaiheg
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/*Posted date */}

        <Text> March 11, 2022</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  userName: {fontWeight: fonts.weight.bold, color: colors.black},
  threeDots: {},
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  footer: {
    padding: 10,
  },

  commentText: {
    color: colors.black,
    flex: 1,
  },

  image: {
    width: '100%',
    height: '70%',
  },
  icon: {marginHorizontal: 5},
  userAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},

  text: {
    color: colors.black,
    lineHeight: 16,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
