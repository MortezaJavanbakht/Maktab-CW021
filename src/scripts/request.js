import axios from "axios";

export const requests = {
  getall: function (setAllUsers) {
    axios
      .get("https://63a3f3dc9704d18da099a375.mockapi.io/test")
      .then((res) => {
        const users = res.data;
        setAllUsers(users);
      });
  },
  delete: function (setAllUsers, deleteID) {
    axios
      .delete(`https://63a3f3dc9704d18da099a375.mockapi.io/test/${deleteID}`)
      .then((res) => this.getall(setAllUsers));
  },
  edit: function (setAllUsers, editID, data) {
    axios
      .put(`https://63a3f3dc9704d18da099a375.mockapi.io/test/${editID}`, data)
      .then((res) => this.getall(setAllUsers));
  },
};
