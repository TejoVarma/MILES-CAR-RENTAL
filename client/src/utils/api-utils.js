import { getToken } from "./storage-utils";
const URL = "https://miles-car-rental-node-tejo.onrender.com";

// to get all admin cars
export async function getCars() {
    return await fetch(`${URL}/admin/cars`, {
        headers: {
            "authorization": getToken()
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
};
// to get car by id
export async function getCarById(id) {
    return await fetch(`${URL}/admin/cars/${id}`, {
        headers: {
            "authorization": getToken()
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
};
//to add new car
export async function addNewCar(car) {
    return await fetch(`${URL}/admin/newcar`, {
        method: "POST",
        headers: {
            "authorization": getToken()
        },
        body: car
    })
        .then(res => res.json())
        .catch(err => alert(err.message));
}
// to edit car by id
export async function editCar(car, id) {
    return await fetch(`${URL}/admin/car/${id}`, {
        method: "PUT",
        headers: {
            "authorization": getToken()
        },
        body: car
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
// to delete car by id
export async function deleteCar(id) {
    return await fetch(`${URL}/admin/car/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": getToken()
        },
    })
        .then(res => res.json())
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
// to save the booking details
export async function saveBookingDetails(details) {
    return await fetch(`${URL}/user/bookingdetails`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            "authorization": getToken()
        },
        body: JSON.stringify(details)
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}
// to get the saved booking details
export async function getBookingDetails() {
    return await fetch(`${URL}/user/getbookingdetails`, {
        headers: {
            "authorization": getToken()
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message));
}
// to get cars to display in booking page
export async function getUserCars() {
    return await fetch(`${URL}/user/getcars`, {
        headers: {
            "authorization": getToken()
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
// to get car by id
export async function getUserCarById(id) {
    return await fetch(`${URL}/user/getcar/${id}`, {
        headers: {
            "authorization": getToken()
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
};
// to add data to mybookings
export async function saveToMyBookings(data) {
    return await fetch(`${URL}/user/postmybookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken(),
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
//to get mybookings data
export async function getMyBooking() {
    return await fetch(`${URL}/user/mybookings`, {
        headers: {
            "authorization": getToken(),
        },
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
//to get my booking details by id
export async function getMyBookingById(id) {
    return await fetch(`${URL}/user/get/${id}`, {
        headers: {
            "authorization": getToken(),
        },
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
// to edit the my booking details
export async function editMyBookingById(data, id){
    return await fetch(`${URL}/user/update/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken(),
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
// to delete my booking
export async function deleteMyBookingById(id){
    return await fetch(`${URL}/user/mybookings/${id}`,{
        method: "DELETE",
        headers: {
            "authorization": getToken(),
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}
export default URL;
