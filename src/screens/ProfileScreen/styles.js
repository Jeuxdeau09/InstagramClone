import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import React from 'react';
import colors from '../../theme/colors';

export default StyleSheet.create({
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  root: {
    padding: 10,
  },
  image: {},
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.size.md,
    color: colors.black,
    fontWeight: fonts.weight.full,
  },

  name: {
    fontWeight: fonts.weight.semi,
    color: colors.black,
  },

  button: {
    flexDirection: 'row',
     

    },
  
});
