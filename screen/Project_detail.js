import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';

function Project_Detail() {
  return (
    <ImageBackground
      source={require('../Assets/Project.png')}>
      <View>
        <Text style={style.heading}>Project Detail</Text>
        <View style = {style.HeadingUnderline}></View>
      </View>
      <View>
        <Text style={style.year1}>2023</Text>
        <Text style={style.content}>I done a online mobile shopping using C#, Html, CSS, JavaScript, MySQL</Text>
      </View>
      <View>
        <Text style={style.year1}>2023</Text>
        <Text style={style.content}>I done a sample ReactJS project for Besant Technologies.</Text>
      </View>
      <View>
        <Text style={style.year}>2019</Text>
        <Text style={style.content}>2019 MSc Project Marriage Invitation done by Xcode, iOS application.</Text>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: '#0905A5',
    fontSize: 30,
  },
  HeadingUnderline: {
    backgroundColor: '#D50339',
    height: 10,
    width: 80,
    marginLeft: 125,
    marginBottom: '10%',
  },
  year:{
    marginLeft:60,
    color:"#0905A5",
    fontSize:20,
  },
  content:{
    width:284,
    marginLeft:86,
    fontSize:20,
    color:"#0905A5",
  },
  year1:{
    marginLeft:60,
    color:"#0905A5",
    fontSize:20,
    marginTop:30,
  },
});

export default Project_Detail;
