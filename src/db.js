const users = [
  {
    id: "1",
    name: "Giorno",
    email: "giorno@gangstar.com",
    age: 20
  },
  {
    id: "2",
    name: "Guido",
    email: "mista@gangstar.com",
    age: 23
  },
  {
    id: "3",
    name: "Leone",
    email: "abbacchio@gangstar.com",
    age: 27
  },
  {
    id: "4",
    name: "Narancia",
    email: "ghriga@gangstar.com",
    age: 20
  },
  {
    id: "5",
    name: "Bruno",
    email: "bucciarati@gangstar.com",
    age: 26
  },
  {
    id: "6",
    name: "Pannacotta",
    email: "fugo@gangstar.com",
    age: 21
  }
];

const posts = [
  {
    id: "1",
    title: "Attack Titan",
    body: "Eren is the Attack Titan",
    published: true,
    author: "1"
  },
  {
    id: "2",
    title: "Armor Titan",
    body: "Reiner is the Armor Titan",
    published: true,
    author: "2"
  },
  {
    id: "3",
    title: "Colossal Titan",
    body: "Armin is the Colossal Titan",
    published: true,
    author: "3"
  }
];

const comments = [
  {
    id: "1",
    text: "Great post!",
    author: "1",
    post: "1"
  },
  {
    id: "2",
    text: "Nice post!",
    author: "2",
    post: "2"
  },
  {
    id: "3",
    text: "Very good post!",
    author: "3",
    post: "3"
  },
  {
    id: "4",
    text: "Awesome post!",
    author: "4",
    post: "3"
  }
];

const db = {
  users,
  posts,
  comments
}

export default db;