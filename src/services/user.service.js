import api from "../api";

export default class {
  static async login(username, password) {
    return api.post("/login", { username, password });
  }

  static async registration(username, email, password) {
    return api.post("/registration", { username, email, password });
  }
  static async logout() {
    return api.post("/logout", {});
  }
}
