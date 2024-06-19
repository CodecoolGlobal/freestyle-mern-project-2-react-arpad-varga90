import { DocumentSnapshot, SnapshotOptions, addDoc, collection, deleteDoc, doc, query, where } from "firebase/firestore";
import store from "../firebase/store";
import { NewStamp, Stamp } from "../types/Stamp";

const converter = {
  toFirestore(stamp: Stamp) {
    return stamp;
  },
  fromFirestore(snap: DocumentSnapshot, options: SnapshotOptions): Stamp {
    const data = snap.data(options) as Omit<Stamp, "id">;
    return {
      id: snap.id,
      ...data,
    };
  },
};

export const stampCollection = collection(store, "stamps").withConverter<Stamp>(converter);

export function stampQuery (uid:string){
    return query(stampCollection, where('uid','==',uid))
}

export async function addDoneStamp(stamp: NewStamp) {
  return await addDoc(stampCollection, stamp);
}

export function getstampDoc(id: string) {
  return doc(store, "stamps", id).withConverter<Stamp>(converter);
}