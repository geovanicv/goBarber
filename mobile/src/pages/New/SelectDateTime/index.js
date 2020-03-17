import React, {useState, useEffect} from 'react';
import api from '../../../services/api';

import DateInput from '../../../components/DateInput';
import Background from '../../../components/Background';

import {Container, TimeList, Hour, Title} from './styles';

export default function SelectDateTime({navigation, route}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const {provider} = route.params;

  useEffect(() => {
    async function loadTime() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
    }
    loadTime();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <TimeList
          data={hours}
          extraData={date}
          keyExtractor={item => item.time}
          renderItem={({item}) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
