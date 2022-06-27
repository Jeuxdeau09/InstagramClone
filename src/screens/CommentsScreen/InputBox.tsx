import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const InputBox = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('posting the comment ', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />

      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder=" write your comment"
        style={styles.input}
        multiline= {true}
      />

      <Text onPress={onPost} style={styles.button}>
        {' '}
        post{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },

  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },

  button: {
    position: 'absolute',
    right: 25,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },

  input: {
    flex: 1,
    marginLeft: 5,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    padding: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
  },
});

export default InputBox;
