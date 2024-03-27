import express from "express";
const router = express.Router();
import firebaseController from "./FirebaseController.js";

router.post('/createUser', firebaseController.handleCreateNewUser);
router.post('/addFavorite', firebaseController.handleAddFavRepoToUser);
router.post('/removeFavorite', firebaseController.handleRemoveFavRepoFromUser);
router.get('/getFavorites', firebaseController.handleGetAllFavToUser);

export default router;
