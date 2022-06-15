import {View, FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
        )}
        pagingEnabled
        horizontal
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <View
          style={{
            width: 10,
            aspectRatio: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            margin: 5,
          }}
        />
        <View
          style={{
            width: 10,
            aspectRatio: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            margin: 5,
          }}
        />
      </View>
    </View>
  );
};

export default Carousel;
