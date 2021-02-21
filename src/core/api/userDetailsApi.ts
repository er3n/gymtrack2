import firestore from '@react-native-firebase/firestore';

export interface IUserDetails {
  name?: string;
  weight?: string;
  birthDate?: Date;
  injuries?: string;
}

export const getUserDetails = async (uid: string): Promise<IUserDetails | undefined> => {
  const response = await firestore().collection<IUserDetails>('userdetails').doc(uid).get();
  const data = response.data();
  if (data && data.birthDate) {
    // @ts-ignore
    data.birthDate = data.birthDate.toDate();
  }
  return response.data();
};
export const updateUserDetails = async (uid: string, userDetails: IUserDetails): Promise<IUserDetails> => {
  await firestore().collection<IUserDetails>('userdetails').doc(uid).set(userDetails);
  return userDetails;
};
