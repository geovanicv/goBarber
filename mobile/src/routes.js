import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#7159c1'},
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Routes;
