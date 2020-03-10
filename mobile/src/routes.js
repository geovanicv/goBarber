import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Confirm from './pages/New/Confirm';
import SelectDateTime from './pages/New/SelectDateTime';
import SelectProvider from './pages/New/SelectProvider';

const StackLogin = createStackNavigator();
const StackAgendamento = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackLoginScreen = () => (
  <StackLogin.Navigator headerMode="none">
    <StackLogin.Screen name="SignIn" component={SignIn} />
    <StackLogin.Screen name="SignUp" component={SignUp} />
  </StackLogin.Navigator>
);

const StackAgendamentoScreen = ({navigation}) => (
  <StackAgendamento.Navigator
    screenOptions={{
      headerTintColor: '#FFF',
      headerTransparent: true,
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}>
    <StackAgendamento.Screen
      name="SelectProvider"
      component={SelectProvider}
      options={{
        title: 'Selecione o prestador',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
    <StackAgendamento.Screen
      name="SelectDateTime"
      component={SelectDateTime}
      options={{title: 'Selecione a data'}}
    />
    <StackAgendamento.Screen
      name="Confirm"
      component={Confirm}
      options={{title: 'Confirmar'}}
    />
  </StackAgendamento.Navigator>
);

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
          } else if (route.name === 'New') {
            iconName = 'add-circle-outline';
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
        name="New"
        component={StackAgendamentoScreen}
        options={{title: 'Agendar', tabBarVisible: false}}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Meu Perfil'}}
      />
    </Tab.Navigator>
  ) : (
    <StackLoginScreen />
  );
}

export default Routes;
