import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import About from './About';
import Skill from './Skill';
import Project_detail from './Project_detail';
import Work from './Work';
import Education from './Education';
import ContactMe from './ContactMe';

function Menuscreen() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Developer</Text>
      </View>
      <View style={styles.developer}>
        {
          <SafeAreaView>
            <ScrollView>
              <View>
                <About />
              </View>
              <View style={styles.skillmargin}>
                <Skill/>
              </View>
              <View style={styles.Project_detail}>
                <Project_detail/>
              </View>
              <View style={styles.Project_detail}>
                <Work/>
              </View>
              <View style={styles.Project_detail}>
                <Education/>
              </View>
              <View style={styles.ContactMe}>
                <ContactMe/>
              </View>
            </ScrollView>
          </SafeAreaView>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: '#D50339',
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    height: '7%',
  },
  headerText: {
    marginLeft: 10, 
    fontSize: 20,
  },
  headerIcon: {
    marginLeft: '70%',
  },
  developer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#FD285E',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    width: '90%',
    margin: '2%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  skillmargin:{
    marginTop:"3%", 
    marginBottom:"3%"
  },
  Project_detail:{
    marginTop:"5%",
    marginBottom:"5%",
  },  
  ContactMe:{
    marginTop:"5%",
  },
});

export default Menuscreen;
