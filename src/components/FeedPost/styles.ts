import {StyleSheet} from 'react-native';
import React from 'react';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import Comment from '../Comment';

export default StyleSheet.create({
  post: {},
  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  userName: {fontWeight: fonts.weight.bold, color: colors.black},
  threeDots: {},
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  footer: {
    padding: 10,
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
});
