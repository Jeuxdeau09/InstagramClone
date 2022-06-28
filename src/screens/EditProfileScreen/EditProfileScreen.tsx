import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}> {label}</Text>
    <TextInput placeholder={label} style={styles.input} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.warn('submit');
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />

      <Text style={styles.textButton}>Change profile picture </Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="BIO" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },

  textButton: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    color: colors.primary,
    margin: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  input: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    flex: 1,
  },
  label: {
    width: 75,
  },
});

export default EditProfileScreen;
