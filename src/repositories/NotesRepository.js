import axios from "axios";

const BASEURL = process.env.VUE_APP_BASEURL;

export default {
    getNotes: async (user, filters) => {
        try {
            filters.userUID= user.uid
            const response = await axios.get(`${BASEURL}/notes?filters=${JSON.stringify(filters)}`)

            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    getNote: async (noteId) => {
        try {
            const response = await axios.get(`${BASEURL}/notes/${noteId}`)
     
            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    createNote: async (noteData) => {
        try {
            await axios.post(`${BASEURL}/notes/`, noteData)
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    updateNote: async (noteId , noteData) => {
        try {
            await axios.put(`${BASEURL}/notes/${noteId}`, noteData)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    deleteNote: async (noteId) => {
        try {
            await axios.delete(`${BASEURL}/notes/${noteId}`)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    },
}