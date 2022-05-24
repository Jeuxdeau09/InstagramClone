import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const FeedPost = ({post}) => {
  return (
    <View style={styles.post}>
      {/*hEADER */}
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />

        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/*content */}
      <Image source={{uri: post.image}} style={styles.image} />

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
          <Text style={styles.bold}> {post.nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}> {post.user.username} </Text>
          {post.description}
        </Text>

        {/* Comments */}
        <Text> View all {post.nofComments} comments</Text>
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

        <Text> {post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
