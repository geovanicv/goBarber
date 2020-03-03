import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return signed ? (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        style: {
          backgroundColor: '#8d41a8',
        },
        inactiveTintColor: 'rgba(255,255,255,0.6)',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'event';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={20} color="#FFF" />;
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Agendamentos'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Meu Perfil'}}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Routes;
