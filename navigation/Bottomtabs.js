import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {Getjsonfile} from '../Getjsonfile';
import Porto from '../App';
import Getdata from '../Getdata';
import Createdata from '../Createdata';

function PortoScreen() {
  return (
    <View>
      <Porto />
    </View>
  );
}

function Map() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>map!</Text>
    </View>
  );
}

function Mahasiswa() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function Datascreen() {
  return (
    <View>
      <Getdata/>
    </View>
  );
}

function Creatscree() {
  return (
    <View>
      <Createdata/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Porto"
          component={PortoScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Porto',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Mahasiswa"
          component={Mahasiswa}
          options={{
            headerShown: false,
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Data"
          component={Datascreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Create Data"
          component={Creatscree}
          options={{
            headerShown: false,
            tabBarLabel: 'Create Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
