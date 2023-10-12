import { ref } from 'vue';
import axios from 'axios'

export const useModuleApi = () => {

    const moduleApi = axios.create({
        baseURL: 'https://dummyjson.com'
    })    

    return {
        moduleApi
    }

}