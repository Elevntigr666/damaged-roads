import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {Getjsonfile} from '../Getjsonfile';
import Porto from '../App';
import Getdata from '../Getdata';
import WebView  from 'react-native-webview';
import Createdata from '../Createdata';
import Data from '../Callapi';

// form input Git Hub
const forminput = 'https://elevntigr666.github.io/lokasiobjek/';

// peta web dari Git Hub
const webmap = 'https://elevntigr666.github.io/lokasiobjek/map.html';

function PortoScreen() {
  return (
    <View>
      <Porto />
    </View>
  );
}

function Mapscreen() {
  return (
    <WebView
     source={{uri:webmap}}
    />
  );
}
function AddData() {
  return (
    <WebView
       source={{uri:forminput}}
      />
  );
}

function Jalan() {
  return (
    <View>
    <Data />
  </View>
  );
}

// function Mahasiswa() {
//   return (
//     <View>
//       <Getjsonfile />
//     </View>
//   );
// }

// function Datascreen() {
//   return (
//     <View>
//       <Getdata/>
//     </View>
//   );
// }

// function Creatscree() {
//   return (
//     <View>
//       <Createdata/>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profil"
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
          component={Mapscreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddData}
          options={{
            headerShown: false,
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="upload" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Data"
          component={Data}
          options={{
            headerShown: false,
            tabBarLabel: 'Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="server" color={color} size={size} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Mahasiswa"
          component={Mahasiswa}
          options={{
            headerShown: false,
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        /> */}
{/* 
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
        /> */}
        
        {/* <Tab.Screen
          name="Create Data"
          component={Creatscree}
          options={{
            headerShown: false,
            tabBarLabel: 'Create Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
