const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.route.js');
const postRouter = require('./routes/post.route.js');
const cors = require("cors");

// 🔥 FIRST
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

const allowedOrigins = [
  "http://localhost:5173",
  "https://caption-generator-frontend-six.vercel.app",
  "https://caption-generator-frontend-l25vw8ow8.vercel.app",
  "https://caption-generator-front-git-043085-pawan-kumar-pandeys-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


// THEN
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/api/post', postRouter);
app.use('/api/auth', authRouter);

module.exports = app;