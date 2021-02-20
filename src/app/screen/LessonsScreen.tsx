import React from 'react';
import { Button, Text, View } from 'react-native';
import { signOut } from 'core';

export const LessonsScreen = () => {
  return (
    <View>
      <Text>Lessons</Text>
      <Button
        title='Çıkış'
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};
