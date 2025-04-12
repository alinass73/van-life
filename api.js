import { initializeApp } from "firebase/app";
import { getFirestore,
        collection,
        doc,
        getDocs,
        getDoc,
        query,
        where    
    } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBBadw1m0Zjr8OKYSeQMVZq55n3rLugtE8",
  authDomain: "reactvan7.firebaseapp.com",
  projectId: "reactvan7",
  storageBucket: "reactvan7.firebasestorage.app",
  messagingSenderId: "667680504104",
  appId: "1:667680504104:web:ada162512bc08a0b3fb81d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)


const vansCollectionRef= collection(db, "vans")

export async function getVans() {
    console.log("fjffo")
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    console.log("fjo")
    // console.log(dataArr)
    return dataArr
}

export async function getVan(id) {
    const docRef= doc(db, "vans", id);
    const vanSnapshot= await getDoc(docRef);
    // console.log(vanSnapshot)
    
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    };
}

// export async function getVans(id) {
//     const res = id ? await fetch(`/api/vans/${id}`) : await fetch("/api/vans") ;
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVan() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot= await getDocs(q)
    const dataArr= querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

// export async function getHostVan(id) {
//     // const res = van ? await fetch(`/api/host/vans/${van}`) : await fetch(`/api/host/vans`)
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//     console.log(url)
//     const res =  await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

// export async function loginUser(creds) {
//     const res = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(creds)
//     });

//     // Handle empty or invalid responses
//     const text = await res.text();
//     const data = text ? JSON.parse(text) : {};

//     if (!res.ok) {
//         throw {
//             message: data.message || "Login failed",
//             statusText: res.statusText,
//             status: res.status
//         };
//     }

//     return data;
// }