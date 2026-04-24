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

app.use(cors({
  origin: "https://your-frontend.vercel.app",
  credentials: true
}))

// THEN
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/api/post', postRouter);
app.use('/api/auth', authRouter);

module.exports = app;