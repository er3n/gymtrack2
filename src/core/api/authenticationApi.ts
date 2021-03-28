import auth from '@react-native-firebase/auth';

export const signIn = async (req: { username: string; password: string }) => {
  return auth().signInWithEmailAndPassword(req.username, req.password);
};
export const signUp = async (req: { username: string; password: string }) => {
  const authState = await auth().createUserWithEmailAndPassword(req.username, req.password);
  return authState;
};
export const signOut = async () => {
  return auth().signOut();
};

export interface IUpdatePasswordRequest {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const updatePassword = async ({ email, currentPassword, newPassword }: IUpdatePasswordRequest) => {
  await auth().currentUser!.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, currentPassword));
  await auth().currentUser?.updatePassword(newPassword);
};
