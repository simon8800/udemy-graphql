const Query = {
  users(parent, args, { db }, info) {
    if (args.query) {
      return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
    } else {
      return db.users;
    }
  },
  posts(parent, args, {db}, info) {
    if (args.query) {
      return db.posts.filter(post => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
        return isTitleMatch || isBodyMatch;
      });
    } else {
      return db.posts;
    }
  },
  comments(parent, args, { db }, ctx) {
    return db.comments;
  },
  me() {
    return {
      id: "123",
      name: "Simon",
      email: "Simon@test.com"
    }
  },
  post() {
    return {
      id: "123",
      title: "Hello",
      body: "Hello World",
      published: false
    }
  }
}

export default Query;