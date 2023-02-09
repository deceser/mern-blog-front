import api from "../api";

export default class {
  static async createPost(title, text, imageUrl) {
    return api.post("/create-post", { title, text, imageUrl });
  }

  static async getPosts() {
    return api.get("/posts");
  }

  static async getMyPosts(id) {
    return api.get("/posts/user/me", { id });
  }

  static async getOnePost(id) {
    return api.get(`/posts/${id}`);
  }

  static async deletePost(id) {
    return api.delete(`/posts/${id}`);
  }

  static async updatePost(id, title, text, imageUrl) {
    return api.patch(`/posts/${id}`, { title, text, imageUrl });
  }
}
