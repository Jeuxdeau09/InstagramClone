import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useEffect, useState, useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import colors from '../../theme/colors';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeIcons = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<Boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);

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

  const flipCamera = () => {
    setCameraType(currentCameraType =>
      currentCameraType == CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex == flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 1,
      base64: false,
      skipProcessing: true,
    };

    const result = await camera.current?.takePictureAsync();
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    
    try {
      const result = await camera.current.recordAsync(options);
    } catch (e) {
      console.log(e);
    }
    setIsRecording(false);
    console.log(result);
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermissions == null) {
    return <Text> LOADING </Text>;
  }

  if (hasPermissions == false) {
    return <Text>NO CAMERA ACCESS </Text>;
  }

  return (
    <View style={styles.page}>
      <View style={[styles.buttonsContainer, {top: 0}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />

        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeIcons[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>

        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>

      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonsContainer, {bottom: 0}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />

        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.accent : colors.white},
              ]}
            />
          </Pressable>
        )}

        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },

  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    padding: 15,
  },

  circle: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 65,
    backgroundColor: 'yellow',
  },
});
export default PostUploadScreen;
