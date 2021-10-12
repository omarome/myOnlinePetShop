
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";



import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";



const Tab = createBottomTabNavigator();

const AppNavigator = () =>{ 


  useEffect(() => {
    registerForPushNotifications ();
  }),[];
 
   const registerForPushNotifications = async () => {
    
    try {
    
      const permission = await Notifications.requestPermissionsAsync();
      if(!permission.granted){
        console.log("not garanted");
         return;
        };//if(!permission.granted) return;
      
      const token = await (await Notifications.getExpoPushTokenAsync()).data;//Notifications.getExpoPushTokenAsync();
      console.log("token s",token);  
    } catch (error) {
      console.log('Error getting a push token',error);
    }
  } 
  return (
  <Tab.Navigator screenOptions={{headerShown: false }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
      
 
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="My Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
    };
export default AppNavigator;
