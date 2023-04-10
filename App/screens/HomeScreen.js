import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {AppBar, Button, Avatar, IconButtonProps, IconButton, Stack} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {FAB} from 'react-native-paper'
import Modal from 'react-native-modal';
//import { TouchableOpacity } from 'react-native-web';
import * as WebBrowser from 'expo-web-browser';
import MyBottomSheet from './MyBottomSheet';


function HomeScreen() {
  
  const [isModalVisible, setModalVisible] = useState(false);
  function toggleModal () {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  //const baseUrl = 'https://jsonplaceholder.typicode.com/users';
  //const getApi = () => {
  //  axios({
  //    method: 'GET',
  //    url: baseUrl
  //  }).then(res => console.log(res)).catch(err => console.log(err));
  //}
  
  return (
    <View
    style = {{
      backgroundColor: "#E5E5E5",
      flex: 1,
    }}
    >
      <StatusBar
        backgroundColor="#F9C201"
        statusBarStyle='default'
      >
      </StatusBar>

      <AppBar
      style = {{
        paddingTop: 30,
        backgroundColor: "#F9C201",
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        centerTitle: 'true'
      }}
      centerTitle= {true}
      backgroundColor= "#F9C201"          
      > 
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
          TrackIt
          </Text>
        </View>

        <IconButton
        icon={<Icon name="account-circle" size={24} color="#fff" />}
        style={styles.profileIcon}
        onPress={() => navigation.navigate('Profile')}
        // navigate to profile page       
      />     
      </AppBar>
      

      <View
      style = {{
        backgroundColor: '#FFFFFF',
        flex: 2,
      }}
      />

      <View 
        style = {{
          backgroundColor: '#E5E5E5', 
          flex: 6,
        }}
      ></View>

      <View 
        style = {{
          backgroundColor: '#E5E5E5', 
          flex: 1,
        }}
      >
        <FAB
          style={styles.fab}
          icon= "plus"
          color='white'
          onPress={toggleModal}
        />
      </View>

      <MyBottomSheet 
      isModalVisible= {isModalVisible}
      toggleModal={toggleModal}
      />


    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    margin: 8,
    backgroundColor: '#F9C201',
    bottom: 0,
    alignSelf: 'center'
  },
  profileIcon: {
    position: 'absolute',
    top: 35,
    right: 0,
    margin: 0
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20, // set a maximum font size
    color: "#FFFFFF",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default HomeScreen;