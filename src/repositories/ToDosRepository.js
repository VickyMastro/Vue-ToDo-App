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
    createToDo: async (toDoData) => {
        try {
            await axios.post('https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/todos', toDoData)
        
        } catch (error) {
            console.error('estoy en repository',error)
            throw error
        }
    }
    ,
    deleteToDo: async (toDoId) => {
        try {
            await axios.delete(`https://us-central1-todoapp-8c3f3.cloudfunctions.net/app/todos/${toDoId}`)
        
        } catch (error) {
            console.error('estoy en repository',error)
            throw error
        }
    }
}