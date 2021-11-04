import client from "./client";

const endpoint = '/verses/nvi/sl/22'
const getListings = () => client.get(endpoint)

export default {
    getListings
}