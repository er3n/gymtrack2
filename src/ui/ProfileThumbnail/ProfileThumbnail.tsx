import React from 'react';
import { Thumbnail } from 'native-base';

const blankPerson = require('./blankperson.png');

export const ProfileThumbnail = () => {
  return <Thumbnail large source={blankPerson} />;
};
