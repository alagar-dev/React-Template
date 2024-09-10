import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import axios from 'axios';

type PokeResponse = {
  base_experience: number;
};

export default function App() {
  const [message, setMessage] = useState<null | number>(null);

  const makePostRequest = async () => {
    try {
      const result = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon/ditto');

      console.log('got result', result.data.base_experience);
      setMessage(result.data.base_experience);
    } catch (err) {
      console.log('got error', err);
      setMessage(999);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='dark' />
      <Button title='test button' testID='test-button' onPress={makePostRequest} />
      {message ? <Text testID='test-message'>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 5,
    flex: 1,
    justifyContent: 'center',
  },
});
