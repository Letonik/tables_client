import * as axios from "axios";

const $url = "http://localhost:5000/"
export {$url};

const $instance = axios.create({
    crossDomain: true,
    withCredentials: true,
    baseURL: $url + 'api/',
    credentials: 'include'
});


export const tableAPI = {

    getTableAndSort(page, column, operator, value) {
        let options = '';
        if (column && operator && value) {
            options = `&column=${column}&operator=${operator}&value=${value}`
        }
        return $instance.get(`table?page=${page}${options}`)
    }

}
