import { GraphQLServer } from 'graphql-yoga';

// Scalar Types - String, Boolean, Int, Float, ID (similar to a string)

// Demo user data
const users = [
{
    id: '1',
    name: 'Giorno',
    email: 'giorno@gangstar.com',
    age: 20
  }, 
  {
    id: '2',
    name: 'Guido',
    email: 'mista@gangstar.com',
    age: 23
  }, 
  {
    id: '3',
    name: 'Leone',
    email: 'abbacchio@gangstar.com',
    age: 27
  },
  {
    id: '4',
    name: 'Narancia',
    email: 'ghriga@gangstar.com',
    age: 20
  },
  {
    id: '5',
    name: 'Bruno',
    email: 'bucciarati@gangstar.com',
    age: 26
  },
  {
    id: '6',
    name: 'Pannacotta',
    email: 'fugo@gangstar.com',
    age: 21
  }
]

const posts = [
  {
    id: '1',
    title: 'Attack Titan',
    body: 'Eren is the Attack Titan',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'Armor Titan',
    body: 'Reiner is the Armor Titan',
    published: true,
    author: '2'
  },
  {
    id: '3',
    title: 'Colossal Titan',
    body: 'Armin is the Colossal Titan',
    published: true,
    author: '3'
  }
]

const comments = [
  {
    id: '1',
    text: 'Great post!',
    author: '1',
    post: '1'
  },
  {
    id: '2',
    text: 'Nice post!',
    author: '2',
    post: '2'
  },
  {
    id: '3',
    text: 'Very good post!',
    author: '3',
    post: '3'
  },
  {
    id: '4',
    text: 'Awesome post!',
    author: '4',
    post: '3'
  }
]

// Type definition (schema)
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    post: Post!
    me: User!
    comments: [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (args.query) {
        return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
      } else {
        return users;
      }
    },
    posts(parent, args, ctx, info) {
      if (args.query) {
        return posts.filter(post => {
          const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
          const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
          return isTitleMatch || isBodyMatch;
        });
      } else {
        return posts;
      }
    },
    me() {
      return {
        id: '123kmaskdas',
        name: "Joseph Joestar",
        email: "joestar@gmail.com",
        age: 35
      }
    },
    post() {
      return {
        id: '123asdad',
        title: 'Attack on Titans',
        body: 'Titans broke through Wall Maria',
        published: false
      }
    },
    comments() {
      return comments;
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => comment.post === parent.id);
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter(post => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => comment.author === parent.id);
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find(user => user.id === parent.author);
    },
    post(parent, args, ctx, info) {
      return posts.find(post => parent.post === post.id);
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up!')
})