import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signIn = async (req: { username: string; password: string }) => {
  return auth().signInWithEmailAndPassword(req.username, req.password);
};
export const signUp = async (req: { username: string; password: string }) => {
  const authState = await auth().createUserWithEmailAndPassword(req.username, req.password);
  await firestore().collection('userDetails').doc(authState.user.uid).set({});
  return authState;
};
export const signOut = async () => {
  return auth().signOut();
};
