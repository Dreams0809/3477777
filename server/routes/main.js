import express from 'express';      
// const { ensureAuth, ensureGuest } = require("../middleware/auth");
const postsController = require("../controllers/post");


router.get("/profile", postsController.getProfile);