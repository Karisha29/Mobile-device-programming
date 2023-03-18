import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

const images = [
  'https://i.pinimg.com/564x/5b/f2/76/5bf276a068a6cb7cc51b04b4418aa695.jpg',
  'https://i.pinimg.com/564x/df/3a/12/df3a12342bc9f87de1f75c352580806e.jpg',
  'https://i.pinimg.com/564x/c6/8f/ce/c68fceefe33cb6fcd3da79c689016418.jpg',
  'https://i.pinimg.com/564x/e6/4c/60/e64c60024ff833d653e6e07190719cd2.jpg',
  'https://i.pinimg.com/564x/63/f5/4e/63f54ee41ed5d9f39a35c68430dd8750.jpg',
];

const { width } = Dimensions.get('window');

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled onScroll={handleScroll}>
        {images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View key={index} style={[styles.dot, index === currentIndex && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width,
    height: '100%',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#555',
  },
});

export default App;