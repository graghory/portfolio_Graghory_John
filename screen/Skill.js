import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function skills() {
  return (
    <ImageBackground source={require('../Assets/Skill1.png')} style={styles.BackgroundImage}>
      <Text style={styles.Heading}>Skills</Text>
      <View style={styles.HeadingUnderline}></View>
      <View style={styles.ImageList}>
        <Image
          style={styles.ImageCenter}
          source={require('../Assets/html5.png')}></Image>
        <Image
          style={styles.ImageCenter}
          source={require('../Assets/CSS1.png')}></Image>
        <Image
          style={styles.ImageCenter}
          source={require('../Assets/c-logo-icon-28402.png')}></Image>
      </View>
      <View style={styles.ImageList}>
        <Image
          style={styles.ImageCenter}
          source={require('../Assets/iconVs.png')}></Image>
          <Image
          style={styles.ImageCenter}
          source={require('../Assets/ASP.Net.png')}></Image>
          <Image
          style={styles.ImageCenter} 
          source={require('../Assets/iconJQ.png')}></Image>
      </View>
      <View style={styles.ImageList}>
        <Image
          style={styles.ImageCenter}
          source={require('../Assets/mysql.png')}></Image>
          <Image
          style={styles.ImageCenter}
          source={require('../Assets/JS.png')}></Image>
      </View>
      <View style={{margin:'1%'}}>
        <Image source={require('../Assets/iconRN.png')}></Image>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    height:"886",
    width:"430",
  },
  Heading: {
    textAlign: 'center',
    color: '#0905A5',
    fontSize: 30,
  },
  HeadingUnderline: {
    backgroundColor: '#D50339',
    height: 10,
    width: 46,
    marginLeft: 174,
    marginBottom: '10%',
  },
  ImageList: {
    display: 'flex',
    flexDirection: 'row',
    margin: '2%',
  },
  ImageCenter: {
    height:140,
    width:120,
    marginRight: '5%',
  },
});
export default skills;
