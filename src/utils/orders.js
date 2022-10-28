import { addDoc, collection, getFirestore } from "firebase/firestore";

const createOrder = (newOrder) => {
    //obtener la base de datos
    const database = getFirestore();

    //obtengo la referencia a la collecion
    const collectionReference = collection(database, 'orders');

    return addDoc(collectionReference, newOrder)
        .then((snapshot) => snapshot.id)
        .catch(error => console.warn(error))
}

export default createOrder;