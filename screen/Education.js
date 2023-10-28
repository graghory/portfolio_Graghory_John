import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const isPortrait = () => {
  const { height, width } = Dimensions.get('window');
  return height > width;
};


function Education() {
  return (
    <View style={isPortrait() ? styles.portraitContainer : styles.landscapeContainer}>
      <ImageBackground source={require('../Assets/Education.png')}>
        <View>
          <Text style={style.heading}>Education</Text>
          <View style={style.HeadingUnderline}></View>
        </View>
        {/* This is a Loyola soft Detail */}
        <View style={style.title}>
          <Text style={style.titlename}>2023</Text>
          {/* <Image source={require('../Assets/Besan.png')}></Image> */}
        </View>
        <View style={style.Content}>
          <Text style={style.Con}>
            2023 May 15 to still now i get training as full stuck developer, 
            using c#, ASP.Net, MySQL workbench, visual studio, JavaScript and jquery,
            Loyola soft Technologies,
            Kandikuppam, Krishnagiri
          </Text>
        </View>
        {/* This is a besan Detail */}
        <View style={style.title}>
          <Text style={style.titlename}>2023</Text>
          <Image source={require('../Assets/Besan.png')}></Image>
        </View>
        <View style={style.Content}>
          <Text style={style.Con}>
            2023 Competed React Native course , Besant Technologies, Electronic
            City, Bangalore
          </Text>
        </View>
        {/* This is a don bosco Detail */}
        <View style={style.title}>
          <Text style={style.titlename}>2019</Text>
          <Image source={require('../Assets/DonBosco.png')}></Image>
        </View>
        <View style={style.Content}>
          <Text style={style.Con}>
            2019 Compete M.Sc. (Computer Science), Don Bosco College, Yellagiri
            Hills,Tirupattur, district.
          </Text>
        </View>
        {/* This is a Arignar anna Detail */}
        <View style={style.title}>
          <Text style={style.titlename}>2017</Text>
          <Image source={require('../Assets/Arignar.png')} style={{width:'77%'}} ></Image>
        </View>
        <View style={style.Content}>
          <Text style={style.Con}>
          2017 Competed B.Sc. (Computer Science), Arignar Anna Arts & Science Krishnagiri.
          </Text>
        </View>
      </ImageBackground>
    </View>
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
    marginLeft: 140,
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
export default Education;
