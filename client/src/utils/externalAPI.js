// Require Axios for google books query
import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("/")
    }
};