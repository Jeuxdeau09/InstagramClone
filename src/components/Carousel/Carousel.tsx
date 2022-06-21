import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import {useState, useRef} from 'react';
import React from 'react';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image
              source={{uri: item}}
              style={{width: width, aspectRatio: 1}}
            />
          </DoublePressable>
        )}
        pagingEnabled
        horizontal
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              borderRadius: 10,
              margin: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
