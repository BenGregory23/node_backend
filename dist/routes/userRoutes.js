"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const router = require("express").Router();
router.get("/users", userController_1.getAllUsers);
router.get("/users/:id", userController_1.getUserById);
router.post("/users", userController_1.createUserHandler);
router.put("/users/:id", userController_1.updateUserHandler);
router.delete("/users/:id", userController_1.deleteUserHandler);
router.get("/users/:id/movies", userController_1.getUserMovies);
router.post("/users/:id/movies", userController_1.addMovieHandler);
router.delete("/users/:id/movies", userController_1.removeMovieHandler);
router.get("/users/:id/friends", userController_1.getFriendsHandler);
router.post("/users/:id/friends", userController_1.addFriendHandler);
router.delete("/users/:id/friends", userController_1.removeFriendHandler);
//TODO add the other routes
module.exports = router;
