import axios from "axios"

const url = 'http://localhost:8000'

// Add a user
export const addUser = async(data) => {
    try {
        await axios.post(`${url}/add`,data)
    } catch (error) {
        console.log("Error while addUser API", error.message)
    }
}

// Get a user
export const getUsers = async() => {
    try {
        let response = await axios.get(`${url}/users`)
        // console.log(response)
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers api', error.message)
    }
}

export const setConversation = async(data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log('Error while calling setConversation api', error.message)
    }
}