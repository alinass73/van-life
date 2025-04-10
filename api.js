export async function getVans(id) {
    const res = id ? await fetch(`/api/vans/${id}`) : await fetch("/api/vans") ;
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
 

export async function getHostVan(id) {
    // const res = van ? await fetch(`/api/host/vans/${van}`) : await fetch(`/api/host/vans`)
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res =  await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


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