import { addDoc, collection, doc,  getDoc,  getDocs,  getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {

  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
         .docs
         .map((doc) => ({
            id:doc.id,
            ...doc.data()
         }));
         return list;
    })

    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);

  return getDoc(itemReference)
      .then(snapshot => {
        if(snapshot.exists()){
          const item = {
            id: snapshot.id,
            ...snapshot.data()
          };

          return item;

        }
      })
};


export const getProductsByCategory = (categoryId) => {

  //Obtenemos la base de datos
  const database = getFirestore();

  //Obtenemos la referencia a la coleccion
  const collectionReference = collection(database, 'items');

  //Creamos la consulta, con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId));

  //obtenemos los datos desde el firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
         .docs
         .map((doc) => ({
            id:doc.id,
            ...doc.data()
         }));
         return list;
    })
    //Control de errores
    .catch(error => console.warn(error))
};

const products = [
  { title:'hamburguesa', category: 'carne', description:'Hamburguesa completa', price: 100, pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg', stock: 10},
  { title:'ensalada', category: 'vegetariana', description:'Ensalada caesar', price: 100, pictureUrl: 'https://t2.rg.ltmcdn.com/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.jpg', stock: 10},
  { title:'empanadas', category: 'carne', description:'Empanadas de carne', price: 100, pictureUrl: 'https://media.todojujuy.com/p/534d687c1d154c44205e5643b9091a31/adjuntos/227/imagenes/003/221/0003221167/770x0/smart/imagepng.png', stock: 10}
]

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    
    for (let i = 0; i < products.length; i++){
      const snapshot = await addDoc(collectionReference, products[i])
    }

  } catch (error) {
    console.warn(error)
  }
}