import React from 'react';
import {Text, Button} from 'react-native';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function SignIn({navigation}) {
  return (
    <Background>
      <Text>SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </Background>
  );
}
