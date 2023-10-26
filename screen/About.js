import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Button,
} from 'react-native';
// import Pdf from 'react-native-pdf';


function About() {
  // Button HandlerPress

  return (
    <SafeAreaView style={styles.safeContainer}>
        <ImageBackground
          source={require('../Assets/Photos1.png')}
          style={styles.imageBackground}
          resizeMode="cover">
          <View style={styles.container}>
            <View style={styles.name}>
              <Text style={styles.name1}>MR. GRAGHORY JOHN</Text>
              <Text style={styles.name2}>
                A PROFESSIONAL FULL STACK DEVELOPER
              </Text>
            </View>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
  name: {
    padding: '10%',
    marginTop:'113%',
    height: 253,
    width: '110%',
    backgroundColor: 'rgba(200, 200, 200, 0.5)', 
    alignItems: 'center',
  },
  name1: {
    color: '#0B06ED',
    fontFamily: 'inter',
    fontSize: 30,
    textAlign: 'center',
  },
  name2: {
    color: '#0B06ED',
    fontSize: 14,
    padding: '10%',
    textAlign: 'center',
  },
});

export default About;
