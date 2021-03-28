import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface UserDetailsCollection {
    name?: string;
    weight?: string;
    birthDate?: FirebaseFirestoreTypes.Timestamp;
    injuries?: string;
}