import axios from 'axios'

export function getAllProjects() {

    return axios.get(`${process.env.REACT_APP_API}/projects`).then(result => result.data);
}