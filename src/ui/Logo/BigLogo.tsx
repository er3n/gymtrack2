import React from 'react';
import { Image, StyleSheet } from 'react-native';

const logo = require('./logo.png');

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 5,
    maxWidth: '100%',
  },
});

const BigLogo = () => {
  return <Image source={logo} style={styles.logo} />;
};

export default BigLogo;
