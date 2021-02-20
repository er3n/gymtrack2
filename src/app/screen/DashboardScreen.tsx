import React from 'react';
import { Button, Text, View } from 'react-native';
import { signOut } from 'core';

export function DashboardScreen() {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title='Çıkış'
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
