import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import colors from '../../theme/colors';

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<Boolean | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status == 'granted' &&
          microphonePermission.status == 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasPermissions == null) {
    return <Text> LOADING </Text>;
  }

  if (hasPermissions == false) {
    return <Text>AAAAAAAABBBBB</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera style={styles.camera} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', backgroundColor: colors.black},
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
}); 
export default PostUploadScreen;
