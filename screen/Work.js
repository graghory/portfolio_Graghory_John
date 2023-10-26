import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function work() {
  return (
    <ImageBackground source={require('../Assets/Course.png')}>
      <View>
        <Text style={style.heading}>Working History</Text>
        <View style={style.HeadingUnderline}></View>
      </View>
      
      <View style={style.title}>
        <Text style={style.titlename}> 2019 - 2020</Text>
        <Image source={require('../Assets/QNet.png')}></Image>
      </View>
      <View style={style.Content}>
        <Text style={style.Con}>Network Marketing (2019 oct to Jan 2022)</Text>
      </View>
      <View style={style.title}>
        <Text style={style.titlename}> 2018 - 2019</Text>
        <Image source={require('../Assets/BS.png')}></Image>
      </View>
      <View style={style.Content}>
        <Text style={style.Con}>
          IOS Application Developer in Bosco Soft Technologies Pvt LTD,
          Yellagiri Hills, Tamil Nadu. (2018 June to 2019 March)
        </Text>
        <Text style={style.Con}>
          Designed user experience frame works applicable to fit both iPad and
          iPhone screens.
        </Text>
      </View>
     
      
      {/* this is a course history code */}
      <View style={{marginTop: 50}}>
        <Text style={style.heading}>Course History</Text>
        <View style={style.HeadingUnderline1}></View>
      </View>
      <View style={style.Content}>
        <Text style={style.Con}>
          Java script, React JS, Bootstrap, React Native course completed in
          Besant Technologies Bangalore, In Feb 1 2023.
        </Text>
      </View>
      <View style={style.title}>
        <Text style={style.titlename}>2023</Text>
        <Image source={require('../Assets/Besan.png')}></Image>
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
    marginLeft: 100,
    marginBottom: '10%',
  },
  HeadingUnderline1: {
    backgroundColor: '#D50339',
    height: 10,
    width: 80,
    marginLeft: 110,
    marginBottom: '10%',
  },
  title: {
    display: 'Flex',
    flexDirection: 'row',
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  titlename: {
    color: '#0905A5',
    fontSize: 20,
    marginRight: 25,
    marginTop: 10,
  },
  Content: {
    width: 284,
    marginLeft: 86,
  },
  Con: {
    color: '#0905A5',
    fontSize: 20,
    marginTop: 20,
  },
});

export default work;
