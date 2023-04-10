import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {AppBar, Button, Avatar, IconButtonProps, IconButton, Stack} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';



function ProfileScreen() {

  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const baseUrl = 'https://jsonplaceholder.typicode.com/users?id=1';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch();
      const json = await response.json();
      setData(json[0]);
    };

    fetchData();
  }, []);

  

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
        <IconButton
          icon={<Icon name="arrow-back" size={24} color="#fff" />}
          style={styles.profileIcon}
          onPress={() => navigation.navigate('Home') }
          // navigate to profile page       
        />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
          TrackIt
          </Text>
        </View>

             
      </AppBar>
      

      

      <View 
        style = {{
          backgroundColor: '#ffffff', 
          flex: 9,
        }}
      >
        <View>
          <Text>Name: {data.name}</Text>
          <Text>Phone: {data.phone}</Text>
          <Text>Email: {data.email}</Text>
        </View>

        </View>
    </View>
                  
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff', 
      alignItems: 'center',
      justifyContent: 'center',
    },
    backIcon: {
      position: 'absolute',
      top: 35,
      left: -20,
      margin: 0,
      color: '#ffffff'
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

export default ProfileScreen;