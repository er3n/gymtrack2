import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export const localeDateStrtoTimestamp = (localeDate?: string) => {
  if (!localeDate) {
    return;
  }
  return firestore.Timestamp.fromDate(new Date(localeDate));
};

export const timestampToLocaleDateStr = (timestamp?: FirebaseFirestoreTypes.Timestamp) => {
  if (!timestamp) {
    return undefined;
  }
  return timestamp.toDate().toLocaleDateString();
};
