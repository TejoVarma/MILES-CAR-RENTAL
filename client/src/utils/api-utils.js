import { getToken } from "./storage-utils";
const URL = "http://localhost:4000";

// to get all cars
export async function getCars(){
    return await fetch(`${URL}/admin/cars`,{
        headers : {
            "authorization" : getToken()
        }
    })
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};
// to get car by id
export async function getCarById(id){
    return await fetch(`${URL}/admin/cars/${id}`,{
        headers : {
            "authorization" : getToken()
        }
    })
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};
//to add new car
export async function addNewCar(car) {
    return await fetch(`${URL}/admin/newcar`,{
        method : "POST",
        headers : {
            "authorization" : getToken()
        },
        body : car
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}
// to edit car by id
export async function editCar(car,id){
    return await fetch(`${URL}/admin/car/${id}`, {
        method : "PUT",
        headers : {
            "authorization" : getToken()
        },
        body : car
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}
// to delete car by id
export async function deleteCar(id){
    return await fetch(`${URL}/admin/car/${id}`, {
        method : "DELETE",
        headers : {
            "authorization" : getToken()
        },
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}
// to logIn

export async function loginToAccount(data, boolean) {
    return await fetch(`${URL}/${boolean}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}
// to register
export async function registerAnAccount(data, boolean) {
    return await fetch(`${URL}/${boolean}/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}
//TO CHECK SECRET
export async function secretCheck(data, boolean) {
    return await fetch(`${URL}/${boolean}/secret-check`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}
//TO RESET PASSWORD
export function passwordReset(data, boolean) {
    return fetch(`${URL}/${boolean}/password-reset`, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}

export default URL;
