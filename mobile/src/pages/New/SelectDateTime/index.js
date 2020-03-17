import React, {useState} from 'react';

import DateInput from '../../../components/DateInput';
import Background from '../../../components/Background';

import {Container} from './styles';

export default function SelectDateTime({provider}) {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <Container>
        <DateInput date={date} onchange={setDate} />
      </Container>
    </Background>
  );
}
