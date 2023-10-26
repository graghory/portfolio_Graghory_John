import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Contact() {
  return (
    <ImageBackground source={require('../Assets/Contact.png')}>
      <View>
        <Text style={style.heading}>Contact Me</Text>
        <View style={style.HeadingUnderline}></View>
      </View>
      <View style={style.phone}>
        <Text style={style.Number}>Phone No:</Text>
        <Text style={style.num}>+91 9524451814</Text>
      </View>
      <View style={style.phone}>
        <Text style={style.Number}>Email:</Text>
        <Text style={style.num}>graghoryjohn78@gmail.com</Text>
      </View>
      <View style={style.phone}>
        <Text style={style.Number}>Address:</Text>
        <Text style={style.num}>
          1/278-4 Rajaji Nager 1st cross Krishnagiri
        </Text>
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
    width: 60,
    marginLeft: 130,
    marginBottom: '10%',
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25,
  },
  Number: {
    fontSize: 20,
    color: '#0905A5',
    marginLeft: 38,
  },
  num: {
    fontSize: 20,
    color: '#0905A5',
    marginLeft: 20,
    width: 260,
  },
  line: {
    height: 10,
    marginLeft: 20,
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#D50339',
  },
  view: {
    width: 300,
    marginLeft: 20,
  },
  label: {
    marginLeft: 40,
    marginBottom: 10,
    color: '#0905A5',
    fontSize: 20,
  },
  textfield: {
    marginLeft: 40,
    backgroundColor: '#ffff',
    marginBottom: 20,
  },
  longtext: {
    height: 110,
    marginLeft: 40,
    marginBottom: 30,
    backgroundColor: '#ffff',
  },
  ButtonView: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Contact;
