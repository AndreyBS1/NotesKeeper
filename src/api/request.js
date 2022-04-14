const axios = require("axios").default;

const root = "https://radiant-everglades-87553.herokuapp.com/noteskeeper/";

const path = {
  getAll: root + "get/all",
  getOne: root + "get/one",
  post: root + "post",
  put: root + "put",
  delete: root + "delete",
};

class Request {
  static async getAll() {
    const res = await axios.get(path.getAll).catch((err) => {
      console.log(err);
    });
    // console.log("\nGet\nResponse:\n\n");
    // console.log(res.data);
    return res.data;
  }

  static async getOne(id) {
    const res = await axios
      .get(path.getOne, { params: { id: id } })
      .catch((err) => {
        console.log(err);
      });
    console.log("\nGet\nResponse:\n\n");
    console.log(res.data);
    return res.data;
  }

  static async post(data) {
    await axios
      .post(path.post, data)
      //   .then(() => {
      // console.log("\nPOST\nRequest:");
      // console.log(data);
      //   })
      .catch((err) => {
        console.log(err);
      });
  }

  static async put(data) {
    await axios
      .put(path.put, data)
      //   .then(() => {
      // console.log("\nPUT\nRequest:");
      // console.log(data);
      //   })
      .catch((err) => {
        console.log(err);
      });
  }

  static async delete(data) {
    await axios
      .delete(path.delete, { data: data })
      //   .then(() => {
      // console.log("\nDELETE\nRequest:");
      // console.log(data);
      //   })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Request;
