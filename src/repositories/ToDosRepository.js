import axios from "axios";
 
const BASEURL = process.env.VUE_APP_BASEURL;

export default {
    getToDos: async (user) => {
        try {
            const filters = {userUID: user.uid}
            const response = await axios.get(`${BASEURL}/todos?filters=${JSON.stringify(filters)}`)

            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    getToDo: async (toDoId) => {
        try {
            const response = await axios.get(`${BASEURL}/todos/${toDoId}`)

            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    createToDo: async (toDoData) => {
        try {
            await axios.post(`${BASEURL}/todos/`, toDoData)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    updateToDo: async (toDoId, toDoData) => {
        try {
            await axios.put(`${BASEURL}/todos/${toDoId}`, toDoData)
            
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    deleteToDo: async (toDoId) => {
        try {
            await axios.delete(`${BASEURL}/todos/${toDoId}`)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}