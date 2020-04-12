import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  return <Routes signed={signed} />;
}
