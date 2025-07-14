import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from './config/passport.js';
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import flash from 'express-flash';
import logger from 'morgan';
import cors from 'cors';
import connectDB from './config/database.js';
import { ensureAuth } from './middleware/auth.js';

const app = express();

connectDB();

app.use(cors({
  origin: 'http://localhost:5173', // adjust for your frontend URL
  credentials: true,
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/yourDB'
  }),
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Example protected route
app.get('/protected', ensureAuth, (req, res) => {
  res.json({ message: 'You are authenticated!' });
});

export default app;