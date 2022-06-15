import axios from "axios";
 
export default {
    getToDos: async () => {
        try {
            const response = await axios.get('https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/todos')

            return response.data
            
        } catch (error) {
            console.error(error)
            throw error
        }
    },
}