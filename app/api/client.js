import {create} from 'apisauce'

const apiClient = create({
    baseURL: "https://www.abibliadigital.com.br/api/"
});

export default apiClient;