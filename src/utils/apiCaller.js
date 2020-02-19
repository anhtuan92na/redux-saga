import axios from "axios";
import * as Config from "../constants/config";

export default function callApi(endpoint, method = 'GET', data = null) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    });
}