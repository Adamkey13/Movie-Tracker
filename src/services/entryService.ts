import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { WatchEntry } from "../types";

function getUserEntriesCollection(uid: string) {
    return collection(db, "users", uid, "entries");
}

export async function getCloudEntries(uid: string): Promise<WatchEntry[]> {
    const snapShot = await getDocs(getUserEntriesCollection(uid));

    return snapShot.docs.map((docSnap) => {
        return docSnap.data() as WatchEntry;
    });
}

export async function saveCloudEntry(uid: string, entry: WatchEntry) {
    const entryRef = doc(db, "users", uid, "entries", entry.id);
    await setDoc(entryRef, entry);
}

export async function deleteCloudEntry(uid: string, entryId: string) {
    const entryRef = doc(db, "users", uid, "entries", entryId);
    await deleteDoc(entryRef);
}