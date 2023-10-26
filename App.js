import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import Menuscreen from './screen/Menuscreen';


const isPortrait = () => {
  const { height, width } = Dimensions.get('window');
  return height > width;
};

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3 seconds for the splash screen
  }, []);

  return (
    <View style={styles.container}>
      {splashVisible ? (
        <Image
          source={require('./Assets/img.png')}
          style={styles.splashImage}
          resizeMode="contain"
        />
      ) : (
        /* Your main app content */
        <SafeAreaView>
           <View style={isPortrait() ? styles.portraitContainer : styles.landscapeContainer}>
          <View style={{height: '100%', width: '100%'}}>
            <Menuscreen />
          </View>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
