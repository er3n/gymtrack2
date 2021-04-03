import { Thumbnail } from 'native-base';
import React from 'react';

const blankPerson = require('./blankperson.png');

export const ProfileThumbnail = () => {
  return <Thumbnail large source={blankPerson} />;
};
