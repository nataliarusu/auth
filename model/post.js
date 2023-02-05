const posts = [];

class Post {
  constructor(t, m) {
    this.title = t;
    this.content = m;
  }

  save() {
    posts.push(this); //to push object
  }

  static fetchPosts() {
    return posts;
  }
}

module.exports = Post;
