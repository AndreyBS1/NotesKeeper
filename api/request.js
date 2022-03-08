const axios = require('axios').default;

const path = {
    get: 'https://radiant-everglades-87553.herokuapp.com/noteskeeper/get',
    post: 'https://radiant-everglades-87553.herokuapp.com/noteskeeper/post',
    put: 'https://radiant-everglades-87553.herokuapp.com/noteskeeper/put',
    delete: 'https://radiant-everglades-87553.herokuapp.com/noteskeeper/delete',
};

class Request {
    static async get() {
        const res = await axios
            .get(path.get)
            .catch((err) => {
                console.log(err);
            })
        console.log(`\nGET\nResponse:`)
        console.log(res.data);
        return res.data;
    }

    static async post(data) {
        await axios
            .post(path.post, data)
            .then(() => {
                console.log("\nPOST\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async put(data) {
        await axios
            .put(path.put, data)
            .then(() => {
                console.log("\nPUT\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async delete(data) {
        await axios
            .delete(path.delete, { data: data })
            .then( () => {
                console.log("\nDELETE\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

module.exports = Request;