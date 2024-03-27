import express from "express";
const router = express.Router();
import githubController from './GithubController.js';

router.get('/getAllRepositories', githubController.getAllRepos);

export default router;
