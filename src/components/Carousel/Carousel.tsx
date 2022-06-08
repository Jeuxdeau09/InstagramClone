import {View, FlatList, Image} from 'react-native';
import React from 'react';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: '100%', aspectRatio: 1}} />
        )}
      />
    </View>
  );
};

export default Carousel;
