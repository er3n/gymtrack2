import firestore from '@react-native-firebase/firestore';
import { localeDateStrtoTimestamp, timestampToLocaleDateStr } from 'core/util/fireStoreUtils';
import { UserDetailsCollection } from './collectionTypes';

export interface IUserDetails {
  name?: string;
  weight?: string;
  birthDate?: string;
  injuries?: string;
}

export const getUserDetails = async (uid: string): Promise<IUserDetails | undefined> => {
  const response = await firestore().collection<UserDetailsCollection>('userdetails').doc(uid).get();
  const data = response.data();
  if (data) {
    return {
      ...data,
      birthDate: timestampToLocaleDateStr(data.birthDate),
    };
  }
  return undefined;
};
export const updateUserDetails = async (uid: string, userDetails: IUserDetails): Promise<IUserDetails> => {
  await firestore().collection<UserDetailsCollection>('userdetails').doc(uid).set({
    ...userDetails,
    birthDate: localeDateStrtoTimestamp(userDetails.birthDate),
  });
  return userDetails;
};
