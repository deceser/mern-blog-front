import api from "../api";

export default class {
  static async createComment(id, text, userId) {
    return api.post(`/comments/${id}`, { text, userId });
  }
  static async getAllComment(id) {
    return api.get("/comments", { id });
  }

  static async getCommentsOfPost(id) {
    return api.get(`/comments/${id}`);
  }

  static async deleteComment(postId, commentId) {
    return api.delete(`/posts/${postId}/${commentId}`);
  }
}
