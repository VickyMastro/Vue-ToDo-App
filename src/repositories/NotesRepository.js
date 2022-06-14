import axios from "axios";

// exportar por default un objeto donde cada propiedad sea una funcion 
// cada funcion representa un llamado a la api (endpoint)
// try catch 
export default {
    getNotes: async () => {
        try {
            const response = await axios.get('https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes')

            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    getNote: async (noteId) => {
        try {
            const response = await axios.get(`https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes/${noteId}`)
     
            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    createNote: async (noteData) => {
        try {
            await axios.post('https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes/', noteData)
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    updateNote: async (noteId , noteData) => {
        try {
            await axios.put(`https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes/${noteId}`, noteData)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    deleteNote: async (noteId) => {
        try {
            await axios.delete(`https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes/${noteId}`)
        
        } catch (error) {
            console.error(error)
            throw error
        }
    },
}