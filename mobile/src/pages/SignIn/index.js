import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

export default function SignIn({navigation}) {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
