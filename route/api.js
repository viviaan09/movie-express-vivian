import express from "express";
import * as movieController from "../controllers/movieController.js";

const api = express.Router();

api.get('/movie', movieController.listMovies);
api.post('/movie', movieController.createNewMovie);
api.put('/movie/:id', movieController.updateMovie);
api.delete('/movie/:id', movieController.deleteMovie);


export default api;