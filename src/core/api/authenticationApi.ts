import auth from '@react-native-firebase/auth';

export const signIn = async (req: { username: string; password: string }) => {
  return auth().signInWithEmailAndPassword(req.username, req.password);
};
export const signUp = async (req: { username: string; password: string }) => {
  return auth().createUserWithEmailAndPassword(req.username, req.password);
};
export const signOut = async () => {
  return auth().signOut();
};
