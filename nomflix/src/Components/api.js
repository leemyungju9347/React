import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key:'e7638a32d5dab5f71c53ca3627e15d57',
        language:'ko-KR'
    }
})

// api.get('tv/')