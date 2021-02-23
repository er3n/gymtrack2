import React from 'react';
import { Button, Text, View } from 'react-native';
import { signOut } from 'core';
import { SafeAreaView } from 'react-native-safe-area-context';

export const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Status</Text>
        <Button
          title='Çıkış'
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
