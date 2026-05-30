import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    type User,
} from "firebase/auth";
import { auth } from "../firebase";

export async function registerWithEmail(
    email: string,
    password: string,
    username: string
    ) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: username });
    return userCredential;
}

export function loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logoutFirebaseUser() {
    return signOut(auth);
}

export function listenToAuthChanges(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}