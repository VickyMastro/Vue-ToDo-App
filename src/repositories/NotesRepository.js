import axios from "axios";

// eportar por default un objeto donde cada propiedad sea una funcion 
// cada funcion representa un llamado a la api (endpoint)
// try catch 
export default {
    getNotes: async () => {
        try {
            const response = await axios.get('https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/notes')
            console.log(response.data);
            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}