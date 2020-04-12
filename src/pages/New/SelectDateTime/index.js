import React, { useState } from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

// import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <DateInput date={date} onChange={setDate} />
    </Background>
  );
}
