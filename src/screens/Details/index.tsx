import { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface DetailsProps {
  children: ReactNode;
}

function Details({ children }: DetailsProps) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Details</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Details;
